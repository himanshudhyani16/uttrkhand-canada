import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiMail, FiPhone, FiChevronRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1221] w-full pt-40 pb-10 overflow-hidden ">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-160]  w-full h-[420px] pointer-events-none z-0">
        <Image
          src="/images/blueMoutain2.png"
          alt="Mountains Background"
          fill
          className="object-cover object-top opacity-90"
        />
        {/* Gradient to blend mountains into the solid footer color */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1221]/10 to-[#0b1221]" />
      </div>

      <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none z-0">
        <div className="relative w-[400px] h-[150px] opacity-60">
          <Image
            src="/images/flags2.png"
            alt="Flags"
            fill
            className="object-contain object-left-top"
          />
        </div>
        <div className="relative w-[400px] h-[150px] opacity-60 transform scale-x-[-1]">
          <Image
            src="/images/flags2.png"
            alt="Flags"
            fill
            className="object-contain object-left-top"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative Separator Line */}
        {/* <div className="flex items-center justify-center w-full mb-16">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#EE660C]/50 to-[#EE660C]" />
          <div className="px-4 text-[#EE660C] text-2xl font-serif select-none">
            ❖
          </div>
          <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-[#EE660C]/50 to-[#EE660C]" />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col items-start gap-1">
              <h2 className="text-3xl font-playfair font-bold text-white tracking-wide">
                Uttarakhand
              </h2>
              <p className="text-gray-300 font-inter text-sm tracking-widest uppercase">
                Community Association of Canada
              </p>
              <div className="w-16 h-1 bg-[#EE660C] rounded-full mt-2" />
            </div>

            <p className="text-gray-400 font-inter text-[14.5px] leading-relaxed max-w-sm">
              Connecting Uttarakhandi families across Canada while preserving
              our culture, traditions, and heritage for future generations.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 text-gray-300 font-inter text-[14.5px]">
                <FiMapPin className="text-[#EE660C] w-5 h-5 flex-shrink-0" />
                <span>Toronto, Ontario, Canada</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-inter text-[14.5px]">
                <FiMail className="text-[#EE660C] w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@uttarakhandcanada.ca"
                  className="hover:text-white transition-colors"
                >
                  info@uttarakhandcanada.ca
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-inter text-[14.5px]">
                <FiPhone className="text-[#EE660C] w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+14371234567"
                  className="hover:text-white transition-colors"
                >
                  +1 (437) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-inter font-bold tracking-wider text-[15px] uppercase">
              Quick Links
              <div className="w-8 h-[2px] bg-[#EE660C] mt-2 rounded-full" />
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Home",
                "About Us",
                "Events",
                "Join Us",
                "About Uttarakhand",
                "Blog",
                "Gallery",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white font-inter text-[14.5px] transition-colors"
                  >
                    <FiChevronRight className="text-[#EE660C] w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-inter font-bold tracking-wider text-[15px] uppercase">
              Community
              <div className="w-8 h-[2px] bg-[#EE660C] mt-2 rounded-full" />
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Membership Benefits",
                "Become a Volunteer",
                "Community Guidelines",
                "Cultural Programs",
                "Event Calendar",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white font-inter text-[14.5px] transition-colors"
                  >
                    <FiChevronRight className="text-[#EE660C] w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-inter font-bold tracking-wider text-[15px] uppercase">
              Legal
              <div className="w-8 h-[2px] bg-[#EE660C] mt-2 rounded-full" />
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
                "Disclaimer",
                "Accessibility Statement",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white font-inter text-[14.5px] transition-colors"
                  >
                    <FiChevronRight className="text-[#EE660C] w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-inter font-bold tracking-wider text-[15px] uppercase">
              Follow Us
              <div className="w-8 h-[2px] bg-[#EE660C] mt-2 rounded-full" />
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaFacebook size={16} />
                </div>
                <span className="font-inter text-[14px]">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#fd5949] to-[#d6249f] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaInstagram size={16} />
                </div>
                <span className="font-inter text-[14px]">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaYoutube size={16} />
                </div>
                <span className="font-inter text-[14px]">YouTube</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaLinkedin size={16} />
                </div>
                <span className="font-inter text-[14px]">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-inter text-[13.5px]">
            © {new Date().getFullYear()} Uttarakhand Community Association of
            Canada. All rights reserved.
          </p>
          <p className="text-gray-500 font-inter text-[13.5px] flex items-center gap-1">
            Made with <span className="text-[#D32F2F]">❤</span> by Monkart Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
