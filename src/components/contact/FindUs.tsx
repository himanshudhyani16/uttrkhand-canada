"use client";

import { motion } from "framer-motion";

export default function FindUs() {
  return (
    <section className="w-full bg-[#FCFBF8] pb-24 md:pb-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#EE660C] text-sm">❖</span>
              <div className="h-[2px] w-10 bg-[#EE660C] rounded-full"></div>
            </div>
            <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl">
              Find Us
            </h2>
          </div>

          {/* Map Container */}
          <div className="w-full h-[400px] md:h-[500px] bg-white rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] relative z-10 group">
            {/* 
              Using a standard Google Maps embed URL for Toronto. 
              Once you have an exact registered Google Maps business pin, you can click "Share" on Google Maps, 
              select "Embed a map", and paste the src URL here! 
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.32971206107!2d-79.54286161838573!3d43.718134707833075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1714500000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
