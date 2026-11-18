import { phone_number, whatsapp_number, company_name } from "./secrete";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ImageView = () => {
  return (
    <div className="relative w-full h-[580px] md:h-[640px] overflow-hidden bg-black/50">
      {/* Background image */}
      <img
        src="https://i.pinimg.com/736x/21/7b/ac/217bac88ed18dfc3fffac652c4cadb1e.jpg"
        alt={`${company_name} - Traditional Kerala Consultation Banner`}
        className="w-full h-full object-cover scale-105 opacity-40 mix-blend-luminosity"
      />

      {/* Rich Black Multi-layer gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/90" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Gold top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_15px_#d4af37]" />

      {/* Center ambient glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10 text-white">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full
          bg-[#d4af37]/10 border border-[#d4af37]/40
          text-[#f5e27a] text-[11px] font-semibold tracking-[0.22em] uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          ✦ Authentic Traditional Kerala Consultation
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-tight drop-shadow-2xl"
        >
          {company_name}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex items-center gap-3 mt-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
          <div className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-zinc-300 text-sm md:text-base leading-relaxed max-w-xs md:max-w-xl font-light tracking-wide"
        >
          Trusted Kerala practitioner offering personalized traditional consultations for
          clarity, well-being, and confident life decisions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`tel:${phone_number}`}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md
            font-semibold text-xs text-black uppercase tracking-widest
            bg-gradient-to-r from-[#d4af37] via-[#f5e27a] to-[#d4af37]
            shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 hover:-translate-y-0.5
            transition-all duration-200"
          >
            <Phone size={15} /> Call Now
          </a>

          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-md
            font-semibold text-xs text-white uppercase tracking-widest
            bg-white/5 border border-[#d4af37]/40 backdrop-blur-md
            hover:bg-[#d4af37]/20 hover:border-[#d4af37] hover:-translate-y-0.5
            transition-all duration-200 shadow-lg"
          >
            <MessageCircle size={15} className="text-[#d4af37]" /> Chat Now
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/80 font-medium"
        >
          ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
        </motion.p>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
};

export default ImageView;