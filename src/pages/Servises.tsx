import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secrete";
import { motion } from "framer-motion";

const services = [
  {
    name: "Relationship Support",
    desc: "Consultation for understanding, rebuilding trust, and strengthening personal relationships.",
    img: "https://i.pinimg.com/736x/67/6c/14/676c14b87a4746d4b41288d46f0dd64c.jpg",
  },
  {
    name: "Marriage Consultation",
    desc: "Guidance for a balanced married life, compatibility understanding, and conflict resolution.",
    img: "https://i.pinimg.com/736x/7e/ea/01/7eea010c30269c9ec376ebdb47290edc.jpg",
  },
  {
    name: "Legal Matter Support",
    desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
    img: "https://i.pinimg.com/736x/2f/69/a4/2f69a416116f32d111d50047db559862.jpg",
  },
  {
    name: "Financial Well-being",
    desc: "Holistic consultation for wealth planning, investment direction, and financial stability.",
    img: "https://i.pinimg.com/736x/92/e6/1d/92e61db80219e5c46a852e0eb6acb047.jpg",
  },
  {
    name: "Education Guidance",
    desc: "Traditional consultation support for students seeking focus, confidence, and academic progress.",
    img: "https://i.pinimg.com/736x/9b/d4/dd/9bd4dd89b9dc395c60659fa7a082f022.jpg",
  },
  {
    name: "Career Growth",
    desc: "Clarity for job opportunities, professional direction, and career advancement.",
    img: "https://i.pinimg.com/1200x/fd/f7/cf/fdf7cfa8d84cf07b71b14bc981b50275.jpg",
  },
  {
    name: "Life Path Consultation",
    desc: "In-depth horoscope reading to understand personal strengths and plan life decisions confidently.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
];

export default function Services() {
  return (
    <div 
      className="relative min-h-screen py-24 px-6 overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
          What We Offer
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide mt-3 leading-tight">
          Our <span className="text-[#8b6914]">Consultation</span> Services
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
          <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
        <p className="text-zinc-600 mt-5 text-sm md:text-base leading-relaxed font-light">
          Explore our services designed to guide you with{" "}
          <span className="font-medium text-[#8b6914]">wisdom</span>,{" "}
          <span className="font-medium text-[#8b6914]">peace</span>, and{" "}
          <span className="font-medium text-[#8b6914]">clarity</span> in life.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/90 backdrop-blur-md border border-[#d4af37]/25 rounded-2xl overflow-hidden
            shadow-xl shadow-black/5
            hover:border-[#d4af37]/60 hover:shadow-2xl
            hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Name badge over image */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <h3 className="font-serif text-lg font-semibold text-white tracking-wide drop-shadow-md">
                  {service.name}
                </h3>
                <div className="w-8 h-px bg-[#d4af37] mt-1.5" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1 justify-between">
              <p className="text-zinc-600 text-sm leading-relaxed font-light">
                {service.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <a href={`tel:${phone_number}`} className="flex-1">
                  <button
                    className="w-full flex items-center justify-center gap-1.5
                    bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c]
                    text-white text-xs font-semibold px-4 py-2.5 rounded-md
                    shadow-sm hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b89728] hover:-translate-y-0.5
                    transition-all duration-200 uppercase tracking-wider"
                  >
                    <Phone size={13} /> Call Now
                  </button>
                </a>
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  aria-label={`WhatsApp us about ${service.name}`}
                >
                  <button
                    className="w-full flex items-center justify-center gap-1.5
                    bg-[#f4efe4] border border-[#d4af37]/30 text-zinc-800 text-xs font-semibold
                    px-4 py-2.5 rounded-md
                    hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:text-[#8b6914] hover:-translate-y-0.5
                    transition-all duration-200 uppercase tracking-wider"
                  >
                    <MessageCircle size={13} /> Message
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-[10px] tracking-[0.2em] uppercase text-[#8b6914] font-semibold mt-16 relative z-10"
      >
        ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp; Personal
        Clarity
      </motion.p>
    </div>
  );
}