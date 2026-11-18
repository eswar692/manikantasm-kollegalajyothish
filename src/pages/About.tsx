import {
  phone_number,
  whatsapp_number,
  person_name,
  company_name,
} from "../Genaral/secrete";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Star,
      label: "Years of Experience",
      value: "55+",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      icon: Users,
      label: "Clients Helped",
      value: "10000+",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      icon: Award,
      label: "Trusted Practice",
      value: "India",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      icon: BookOpen,
      label: "Services Offered",
      value: "100+",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
  ];

  return (
    <section 
      className="min-h-screen py-24 px-6 overflow-hidden relative text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide mt-3 leading-tight">
            About <span className="text-[#8b6914]">{company_name}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map(({ icon: Icon, label, value, accent, bg }) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-3 p-5 rounded-xl border bg-white/80 backdrop-blur-sm ${bg} transition-all duration-300 hover:-translate-y-1 shadow-sm`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center border ${bg}`}
              >
                <Icon size={18} className={accent} />
              </div>
              <span className={`font-serif text-2xl font-bold ${accent}`}>
                {value}
              </span>
              <span className="text-zinc-500 text-xs text-center tracking-wide font-medium">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="bg-white/90 backdrop-blur-md border border-[#d4af37]/25 rounded-2xl p-8 md:p-12 shadow-xl shadow-black/5"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-10 opacity-40" />

          <div className="space-y-6 text-zinc-600 text-base leading-relaxed font-light">
            <p>
              <span className="font-semibold text-[#8b6914] text-lg">
                {person_name}
              </span>{" "}
              is a trusted and respected traditional Kerala practitioner with
              decades of experience. With deep knowledge of ancient Kerala
              practices and a genuine commitment to helping others, he has
              established himself as a reliable consultant to individuals and
              families across India.
            </p>

            <div className="w-12 h-px bg-gradient-to-r from-[#d4af37] to-transparent" />

            <p>
              Through his extensive experience and thoughtful approach,{" "}
              <span className="font-medium text-zinc-900">{person_name}</span>{" "}
              offers a wide range of services including horoscope reading, Vastu
              consultation, palmistry, and phone consultations. His knowledge
              spans traditional Kerala practices, holistic well-being, and
              personal development, making him a respected and trusted name in
              his field.
            </p>

            <div className="w-12 h-px bg-gradient-to-r from-[#d4af37] to-transparent" />

            <p>
              Known for his{" "}
              <span className="font-semibold text-[#8b6914]">clarity</span> and
              thoughtful insights,{" "}
              <span className="font-medium text-zinc-900">{person_name}</span> has
              built a loyal following of clients who value the positive
              direction and confidence his consultations bring to their lives.
            </p>

            <div className="w-12 h-px bg-gradient-to-r from-[#d4af37] to-transparent" />

            <p>
              If you are looking for a trusted and experienced consultant, we
              welcome you to get in touch.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-10 mb-8 opacity-40" />

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold text-xs text-white
              bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c]
              shadow-md hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b89728] hover:-translate-y-0.5
              transition-all duration-200 uppercase tracking-widest"
            >
              <Phone size={15} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold text-xs text-zinc-800
              bg-[#f4efe4] border border-[#d4af37]/30
              hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:-translate-y-0.5
              transition-all duration-200 uppercase tracking-widest"
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>

          <p className="text-center text-[10px] tracking-[0.18em] uppercase text-[#8b6914] font-semibold mt-6">
            ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp;
            Personal Clarity
          </p>
        </motion.div>
      </div>
    </section>
  );
}