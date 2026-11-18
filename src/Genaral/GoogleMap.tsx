import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import {  company_name, phone_number } from "./secrete";

export default function GoogleMapSection() {
  // 🗺️ PASTE YOUR GOOGLE EMBED MAP LINK HERE (src value from the embed iframe)
  const googleMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d243.69307950014752!2d77.14761985409724!3d12.242234495303093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1795021191355!5m2!1sen!2sin";
  
  return (
    <section 
      className="relative py-24 px-6 overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      {/* Background ambient glows & dot grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
            Find Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 tracking-wide mt-3">
            Our <span className="text-[#8b6914]">Location</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p className="text-zinc-600 mt-4 text-sm font-light">
            Visit our consultation center or get in touch with us for directions.
          </p>
        </motion.div>

        {/* Map & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md border border-[#d4af37]/25 rounded-2xl p-8 shadow-xl shadow-black/5 flex flex-col gap-6"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
                {company_name}
              </span>
              <h3 className="font-serif text-2xl font-bold text-zinc-900 mt-1">
                Visit Center
              </h3>
              <div className="w-10 h-px bg-gradient-to-r from-[#d4af37] to-transparent mt-3" />
            </div>

           

            <div className="flex items-center gap-3.5 pt-2 border-t border-[#d4af37]/20">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#8b6914]" />
              </div>
              <div className="text-sm text-zinc-600">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                  Direct Line
                </p>
                <a
                  href={`tel:${phone_number}`}
                  className="font-semibold text-zinc-900 hover:text-[#8b6914] transition-colors"
                >
                  +91 {phone_number}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[420px] rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-xl bg-white relative"
          >
            {!googleMapEmbedUrl  ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#fcfaf5]/90">
                <MapPin size={40} className="text-[#8b6914] mb-3 animate-bounce" />
                <h4 className="font-serif text-xl font-semibold text-zinc-900">
                  Map Embed Link Required
                </h4>
                <p className="text-zinc-600 text-xs max-w-md mt-2 leading-relaxed">
                  Please replace <code className="text-[#8b6914] bg-[#f4efe4] px-1.5 py-0.5 rounded font-mono">googleMapEmbedUrl</code> in the code with your Google Maps iframe embed URL.
                </p>
              </div>
            ) : (
              <iframe
                title={`${company_name} Location Map`}
                src={googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-95 hover:opacity-100 transition-all duration-500"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}