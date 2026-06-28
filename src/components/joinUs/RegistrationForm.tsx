"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import SignaturePad from "./SignaturePad";
import {
  FiUser,
  FiMapPin,
  FiPhone,
  FiMail,
  FiUsers,
  FiTrash2,
  FiPlus,
  FiCreditCard,
  FiUploadCloud,
  FiChevronDown,
} from "react-icons/fi";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    membershipType: "family",
    fullName: "",
    fullAddress: "",
    phoneNumber: "",
    email: "",
    maritalStatus: "",
  });

  // Family members: each has { name, relation, phone, email }
  const [familyMembers, setFamilyMembers] = useState([
    { name: "", relation: "", phone: "", email: "" },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [paymentPreview, setPaymentPreview] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFamilyMemberChange = useCallback(
    (index: number, field: string, value: any) => {
      setFamilyMembers((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], [field]: value };
        return updated;
      });
    },
    [],
  );

  const addFamilyMember = useCallback(() => {
    setFamilyMembers((prev) => [
      ...prev,
      { name: "", relation: "", phone: "", email: "" },
    ]);
  }, []);

  const removeFamilyMember = useCallback((index: number) => {
    setFamilyMembers((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleFileSelect = useCallback((file: File | any) => {
    if (!file) return;
    // Validate type
    const allowed = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "application/pdf",
    ];
    if (!allowed.includes(file.type)) {
      setSubmitError(
        "Payment screenshot must be an image (JPG, PNG, WEBP) or PDF.",
      );
      return;
    }
    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setSubmitError("File size must be under 5MB.");
      return;
    }
    setSubmitError("");
    setPaymentFile(file);
    if (file.type !== "application/pdf") {
      setPaymentPreview(URL.createObjectURL(file));
    } else {
      setPaymentPreview("pdf");
    }
  }, []);

  const handleDrop = useCallback(
    (e: any) => {
      e.preventDefault();
      setDragOver(false);
      handleFileSelect(e.dataTransfer.files[0]);
    },
    [handleFileSelect],
  );

  const handleRemoveFile = useCallback(() => {
    setPaymentFile(null);
    setPaymentPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setSubmitError("");
      try {
        // Use FormData so we can attach the file
        const fd = new FormData();
        Object.entries(formData).forEach(([key, val]) => {
          fd.append(key, val);
        });
        fd.append("familyMembers", JSON.stringify(familyMembers));
        if (paymentFile) {
          fd.append("paymentScreenshot", paymentFile, paymentFile.name);
        }
        const res = await fetch("/api/send-email", {
          method: "POST",
          body: fd, // browser sets multipart Content-Type automatically
        });
        const json = await res.json();
        if (!res.ok || !json.success) {
          throw new Error(json.error || "Submission failed. Please try again.");
        }
        setSubmitted(true);
      } catch (err: any) {
        setSubmitError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [formData, familyMembers, paymentFile],
  );

  const isFamily = formData.membershipType === "family";

  return (
    <>
      {" "}
      <div className="min-h-screen bg-[#F8F9FA] py-12 relative font-[family-name:var(--font-inter)]">
        {/* Background Mandala Sketches */}
        <div className="fixed top-1/2 -translate-y-1/2 -left-[300px] w-[600px] h-[600px] opacity-[0.5] pointer-events-none z-0">
          <Image
            src="/images/mandala1.png"
            alt="Mandala Pattern"
            fill
            className="object-contain"
            style={{ animation: "rotateSlow 35s linear infinite" }}
          />
        </div>
        <div className="fixed top-1/2 -translate-y-1/2 -right-[300px] w-[600px] h-[600px] opacity-[0.5] pointer-events-none z-0">
          <Image
            src="/images/mandala1.png"
            alt="Mandala Pattern"
            fill
            className="object-contain"
            style={{ animation: "rotateSlow 35s linear infinite" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {/* 1. MEMBERSHIP TYPE */}
            <div className="bg-white rounded-[1.25rem] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              {/* Faint Mountain SVG background on the right */}
              <div className="absolute right-[-10px] bottom-0 opacity-10 pointer-events-none">
                <svg
                  width="250"
                  height="80"
                  viewBox="0 0 250 80"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-500"
                >
                  <path d="M50 80L80 20L110 80H50Z" />
                  <path d="M100 80L140 10L180 80H100Z" />
                  <path d="M160 80L190 35L220 80H160Z" />
                  <path d="M200 80L220 50L250 80H200Z" />
                </svg>
              </div>

              <h2 className="font-[family-name:var(--font-inter)] text-[0.85rem] font-bold text-[#1A2340] tracking-wider uppercase whitespace-nowrap z-10">
                Select Membership Type
              </h2>

              <div className="flex gap-4 w-full md:w-auto z-10">
                <label className="flex-1 md:flex-none cursor-pointer">
                  <input
                    type="radio"
                    name="membershipType"
                    value="family"
                    checked={formData.membershipType === "family"}
                    onChange={handleChange}
                    className="peer hidden"
                  />
                  <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-[0.75rem] border peer-checked:bg-[#EE660C] peer-checked:border-[#EE660C] peer-checked:text-white border-gray-200 bg-white text-gray-700 font-semibold text-[0.95rem] transition-all shadow-sm">
                    <FiUsers className="text-lg" />
                    <span>Family &ndash; $40 / Year</span>
                  </div>
                </label>
                <label className="flex-1 md:flex-none cursor-pointer">
                  <input
                    type="radio"
                    name="membershipType"
                    value="individual"
                    checked={formData.membershipType === "individual"}
                    onChange={handleChange}
                    className="peer hidden"
                  />
                  <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-[0.75rem] border peer-checked:bg-[#EE660C] peer-checked:border-[#EE660C] peer-checked:text-white border-gray-200 bg-white text-gray-700 font-semibold text-[0.95rem] transition-all shadow-sm">
                    <FiUser className="text-lg" />
                    <span>Individual &ndash; $20 / Year</span>
                  </div>
                </label>
              </div>
            </div>

            {/* 2. PERSONAL INFORMATION */}
            <div className="bg-white rounded-[1.25rem] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-8">
              <SectionHeader
                icon={<FiUser className="text-white w-5 h-5" />}
                title="Personal Information"
              />

              <div className="grid gap-6 mt-8">
                <InputField
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  icon={<FiUser />}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="fullAddress"
                  name="fullAddress"
                  label="Full Address"
                  icon={<FiMapPin />}
                  placeholder="Enter your complete address"
                  value={formData.fullAddress}
                  onChange={handleChange}
                  required
                  isTextarea
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    label="Phone Number"
                    icon={<FiPhone />}
                    placeholder="(403) 000-0000"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    icon={<FiMail />}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-2">
                  {/* Marital Status */}
                  <div>
                    <label className="block text-[0.7rem] font-bold text-[#1A2340] uppercase tracking-wider mb-2">
                      Marital Status
                    </label>
                    <div className="flex gap-4">
                      {["Married", "Single"].map((status) => (
                        <label key={status} className="cursor-pointer relative">
                          <input
                            type="radio"
                            name="maritalStatus"
                            value={status.toLowerCase()}
                            checked={
                              formData.maritalStatus === status.toLowerCase()
                            }
                            onChange={handleChange}
                            className="peer hidden"
                          />
                          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 font-medium text-sm transition-all peer-checked:border-gray-300 peer-checked:text-[#1A2340]">
                            <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-300 flex items-center justify-center peer-checked:border-[#EE660C]">
                              {formData.maritalStatus ===
                                status.toLowerCase() && (
                                <div className="w-2.5 h-2.5 bg-[#EE660C] rounded-full" />
                              )}
                            </div>
                            {status}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Signature */}
                  <div>
                    <label className="block text-[0.7rem] font-bold text-[#1A2340] uppercase tracking-wider mb-2">
                      Signature
                    </label>
                    <div className="border border-gray-200 rounded-[0.5rem] bg-white overflow-hidden relative">
                      <SignaturePad onSignatureChange={setHasSignature} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. FAMILY MEMBERS */}
            {isFamily && (
              <div className="bg-white rounded-[1.25rem] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-8">
                <SectionHeader
                  icon={<FiUsers className="text-white w-5 h-5" />}
                  title="Family Members"
                />

                <div className="grid gap-6 mt-8">
                  {familyMembers.map((member, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 rounded-[1rem] p-6 bg-[#FAFAFA]/50 relative"
                    >
                      <div className="flex items-center justify-between mb-5">
                        <span className="px-3 py-1 bg-[#FFF4ED] text-[#EE660C] text-[0.75rem] font-bold rounded-full uppercase tracking-wider">
                          Member {index + 1}
                        </span>
                        {familyMembers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFamilyMember(index)}
                            className="text-red-400 hover:text-red-600 transition-colors p-1"
                            title="Remove member"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <InputField
                          id={`member-name-${index}`}
                          label="Name"
                          icon={<FiUser />}
                          placeholder="Full name"
                          value={member.name}
                          onChange={(e: any) =>
                            handleFamilyMemberChange(
                              index,
                              "name",
                              e.target.value,
                            )
                          }
                        />
                        <div>
                          <label className="block text-[0.7rem] font-bold text-[#1A2340] uppercase tracking-wider mb-2">
                            Relation
                          </label>
                          <div className="relative">
                            <select
                              value={member.relation}
                              onChange={(e) =>
                                handleFamilyMemberChange(
                                  index,
                                  "relation",
                                  e.target.value,
                                )
                              }
                              className="w-full bg-white border border-gray-200 text-gray-800 text-[0.95rem] rounded-[0.5rem] py-[11px] pl-4 pr-10 appearance-none outline-none focus:border-[#EE660C] transition-colors"
                            >
                              <option value="">Select relation...</option>
                              <option value="Spouse">Spouse</option>
                              <option value="Son">Son</option>
                              <option value="Daughter">Daughter</option>
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Other">Other</option>
                            </select>
                            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <InputField
                          id={`member-phone-${index}`}
                          type="tel"
                          label="Phone (Optional)"
                          icon={<FiPhone />}
                          placeholder="(403) 000-0000"
                          value={member.phone}
                          onChange={(e: any) =>
                            handleFamilyMemberChange(
                              index,
                              "phone",
                              e.target.value,
                            )
                          }
                        />
                        <InputField
                          id={`member-email-${index}`}
                          type="email"
                          label="Email (Optional)"
                          icon={<FiMail />}
                          placeholder="member@example.com"
                          value={member.email}
                          onChange={(e: any) =>
                            handleFamilyMemberChange(
                              index,
                              "email",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addFamilyMember}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-[1rem] border border-[#F6E4DA] bg-[#FFF9F5]/30 text-[#EE660C] font-semibold text-sm hover:bg-[#FFF4ED] transition-colors mt-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#FFF4ED] flex items-center justify-center border border-[#F6E4DA]">
                      <FiPlus className="w-3.5 h-3.5" />
                    </div>
                    Add Another Family Member
                  </button>
                </div>
              </div>
            )}

            {/* 4. PAYMENT SCREENSHOT */}
            <div className="bg-white rounded-[1.25rem] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-8 pb-0 overflow-hidden flex flex-col">
              <SectionHeader
                icon={<FiCreditCard className="text-white w-5 h-5" />}
                title="Payment Screenshot"
              />
              <p className="text-sm text-gray-500 mt-3 mb-6">
                Optional &mdash; upload a screenshot or photo of your e-transfer
                confirmation.
              </p>

              <div
                className={`border-2 border-dashed rounded-[1rem] p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative mb-6 ${dragOver ? "border-[#EE660C] bg-[#FFF4ED]/50" : "border-gray-200 hover:bg-gray-50/50 bg-white"}`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
              >
                {/* Faint Mountain background inside dropzone */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <svg
                    width="280"
                    height="100"
                    viewBox="0 0 280 100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path d="M40 100L90 20L140 100H40Z" />
                    <path d="M120 100L170 15L220 100H120Z" />
                    <path d="M190 100L230 40L270 100H190Z" />
                    <path d="M250 100L265 70L280 100H250Z" />
                  </svg>
                </div>

                {paymentPreview ? (
                  <div className="flex flex-col items-center gap-3 z-10">
                    {paymentPreview === "pdf" ? (
                      <div className="w-16 h-16 bg-gray-100 text-red-500 rounded-xl flex items-center justify-center text-3xl font-bold">
                        PDF
                      </div>
                    ) : (
                      <img
                        src={paymentPreview}
                        alt="Preview"
                        className="h-28 object-contain rounded-lg shadow-sm border border-gray-200"
                      />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {paymentFile?.name}
                      </p>
                      <p className="text-xs text-[#EE660C] hover:underline mt-1">
                        Click to replace file
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center z-10">
                    <FiUploadCloud
                      className="w-10 h-10 text-[#EE660C] mb-3"
                      strokeWidth={1.5}
                    />
                    <p className="text-sm font-bold text-[#1A2340]">
                      Drag & drop your payment screenshot
                    </p>
                    <p className="text-xs text-gray-500 mt-1 mb-2">
                      or{" "}
                      <span className="text-[#EE660C] font-semibold hover:underline cursor-pointer">
                        click to browse
                      </span>
                    </p>
                    <p className="text-[0.65rem] text-gray-400 uppercase tracking-wider">
                      JPG, PNG, WEBP or PDF - Max 5MB
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"
                  className="hidden"
                  onChange={(e) => handleFileSelect(e.target.files?.[0])}
                />
              </div>

              {submitError && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-lg text-center border border-red-100">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mb-8 py-[18px] bg-gradient-to-r from-[#EE660C] to-[#D05609] text-white font-bold text-[1.1rem] tracking-wider rounded-[0.5rem] shadow-[0_4px_15px_rgba(238,102,12,0.3)] hover:shadow-[0_6px_20px_rgba(238,102,12,0.4)] hover:brightness-105 transition-all flex items-center justify-center gap-2 disabled:opacity-70 uppercase relative overflow-hidden"
              >
                {loading ? "SENDING..." : "SUBMIT REGISTRATION"}
                {!loading && (
                  <span className="text-xl leading-none">&rarr;</span>
                )}
                <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path d="M50 0L100 50L50 100L0 50Z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* 5. PAYMENT INFORMATION */}
            <div className="bg-[#0A192F] rounded-[1.25rem] shadow-lg p-8 relative overflow-hidden text-white ">
              <div className="absolute right-0 bottom-[-20px] opacity-[0.07] pointer-events-none">
                <svg
                  width="400"
                  height="180"
                  viewBox="0 0 400 180"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M100 180L180 60L260 180H100Z" />
                  <path d="M220 180L300 30L380 180H220Z" />
                  <path d="M20 180L90 90L160 180H20Z" />
                  <path d="M320 180L360 100L400 180H320Z" />
                </svg>
              </div>

              <div className="flex items-center gap-3 mb-5 z-10 relative">
                <span>💳</span>
                <h2 className="text-[1.05rem] font-bold tracking-[2px] uppercase">
                  Payment Information
                </h2>
                <div className="w-12 h-[1px] bg-[#EE660C] shrink-0" />
              </div>

              <p className="text-[0.95rem] text-gray-200 font-medium mb-6 z-10 relative">
                Membership fees and donations can be paid by e-transfer to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 z-10 relative">
                <div className="bg-[#112240] rounded-xl p-4 flex items-center gap-4 border border-[#233554]">
                  {/* <FiPhone className="w-[22px] h-[22px] text-red-500" /> */}
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-[0.65rem] text-[#EE660C] font-bold tracking-wider uppercase">
                      Phone
                    </p>
                    <p className="text-[1.05rem] font-medium text-gray-100">
                      403-400-5539
                    </p>
                  </div>
                </div>
                <div className="bg-[#112240] rounded-xl p-4 flex items-center gap-4 border border-[#233554]">
                  {/* <FiMail className="w-[22px] h-[22px] text-white" /> */}
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="text-[0.65rem] text-[#EE660C] font-bold tracking-wider uppercase">
                      Email
                    </p>
                    <p className="text-[1.05rem] font-medium text-gray-100">
                      uttarakhandsociety@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#112240] rounded-xl p-4 flex items-center justify-between gap-4 z-10 relative border border-[#233554]">
                <div className="flex items-center gap-4">
                  {/* <FiMapPin className="w-[22px] h-[22px] text-red-500 shrink-0" /> */}
                  <span className="text-xl">📍</span>
                  <p className="text-[0.95rem] font-medium text-gray-100">
                    Records Office: 6102-2255, 32 ST N.E. Calgary, AB T1Y 0C2
                  </p>
                </div>
                <span className="px-3 py-1 bg-transparent text-[#EE660C] text-[0.7rem] font-bold rounded-md border border-[#EE660C]/50 shrink-0 tracking-wider">
                  #0117
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* Success Modal */}
        {submitted && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] flex items-center justify-center p-4"
            onClick={() => setSubmitted(false)}
          >
            <div
              className="bg-white rounded-[1.25rem] p-10 max-w-sm w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                ✓
              </div>
              <h2 className="text-xl font-bold text-[#1A2340] mb-2">
                Registration Submitted!
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                Thank you for registering. A confirmation email has been sent to
                our records office.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full py-3 bg-[#EE660C] text-white rounded-lg font-bold hover:bg-[#D05609] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>{" "}
    </>
  );
}

/* ========================================
   Reusable Sub-components
   ======================================== */

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[42px] h-[42px] rounded-full bg-[#EE660C] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h2 className="font-[family-name:var(--font-inter)] text-lg md:text-[1.15rem] font-bold text-[#1A2340] tracking-widest uppercase">
        {title}
      </h2>
      <div className="w-[48px] h-[1px] bg-[#EE660C] shrink-0" />
    </div>
  );
}

function InputField({
  id,
  name,
  type = "text",
  label,
  icon,
  placeholder,
  value,
  onChange,
  required = false,
  isTextarea = false,
}: any) {
  return (
    <div className="flex flex-col gap-2 relative">
      <label
        htmlFor={id}
        className="text-[0.7rem] font-bold text-[#1A2340] uppercase tracking-wider"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A2340]">
          {icon}
        </div>
        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={2}
            className="w-full bg-white border border-gray-200 text-gray-800 text-[0.95rem] rounded-[0.5rem] py-3 pl-11 pr-4 outline-none focus:border-[#EE660C] transition-colors resize-y min-h-[50px] placeholder:text-gray-400"
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full bg-white border border-gray-200 text-gray-800 text-[0.95rem] rounded-[0.5rem] py-[11px] pl-11 pr-4 outline-none focus:border-[#EE660C] transition-colors placeholder:text-gray-400"
          />
        )}
      </div>
    </div>
  );
}
