import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "../Genaral/FAQ";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-950">
      <ImageView />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <FAQ />
    </div>
  );
};

export default Home;


function Problems() {
  const problems = [
    {
      title: "Relationship Guidance & Healing",
      desc: "Traditional Kerala consultation for emotional clarity, trust restoration, and deep relationship harmony.",
      img: "https://i.pinimg.com/736x/15/75/3d/15753d670292a567fa8c540a62dcb137.jpg",
    },
    {
      title: "Marriage Compatibility Support",
      desc: "Holistic astrological insights for better understanding, conflict resolution, and lasting marital balance.",
      img: "https://i.pinimg.com/1200x/ec/3a/a5/ec3aa5e5688a6f9d9b0de742905d38e8.jpg",
    },
    {
      title: "Career Growth & Direction",
      desc: "Personalized traditional consultation to navigate professional obstacles, job opportunities, and career growth.",
      img: "https://i.pinimg.com/1200x/70/d5/76/70d576f75c4f270b38eb3e289202ddf9.jpg",
    },
    {
      title: "Education & Focus Guidance",
      desc: "Traditional wellness practices and astrological support to enhance student concentration, confidence, and academic progress.",
      img: "https://i.pinimg.com/236x/e3/c5/66/e3c5664288bcab019425631cf670a86c.jpg",
    },
    {
      title: "Financial Stability & Growth",
      desc: "Holistic consultations and traditional insights to support wealth planning and a positive mindset toward prosperity.",
      img: "https://i.pinimg.com/1200x/fd/db/69/fddb69bd78d5323613f03a3ddb44ee25.jpg",
    },
    {
      title: "Family Harmony & Peace",
      desc: "Expert consultation for resolving domestic misunderstandings and improving peace, positivity, and bonding at home.",
      img: "https://i.pinimg.com/736x/e6/3f/f3/e63ff3e1e833e7d5965de542af300fdc.jpg",
    },
    {
      title: "Health & Well-being Support",
      desc: "Traditional Kerala guidance and holistic insights to support mental balance, emotional strength, and well-being.",
      img: "https://i.pinimg.com/736x/e6/3f/f3/e63ff3e1e833e7d5965de542af300fdc.jpg",
    },
    {
      title: "Business Growth Strategy",
      desc: "Holistic consultation for strategic planning, overcoming business roadblocks, and achieving long-term success.",
      img: "https://i.pinimg.com/1200x/d8/1f/66/d81f66160522c0df4d039bfb065d07f2.jpg",
    },
    {
      title: "Life Path Clarity & Horoscope",
      desc: "Discover your true inner strengths and future direction through authentic traditional Kerala horoscope analysis.",
      img: "https://i.pinimg.com/736x/fe/c4/db/fec4dbd0406e4ae90d4cde684526f66b.jpg",
    },
    {
      title: "Inner Peace & Well-being",
      desc: "Dedicated traditional guidance designed to deepen self-awareness, mental calm, and spiritual inner peace.",
      img: "https://i.pinimg.com/736x/bd/07/98/bd07989b7867692892f45969e20442c0.jpg",
    },
  ];

  return (
    <section 
      className="py-20 px-4 relative overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Section header */}
      <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
          How We Help
        </span>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 tracking-wide">
            Areas of <span className="text-[#8b6914]">Consultation</span>
          </h2>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
        <p className="text-zinc-600 mt-3 text-sm max-w-lg mx-auto font-light">
          Explore our specialist consultation areas tailored to provide clarity and peace of mind across all aspects of life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {problems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/90 backdrop-blur-md border border-[#d4af37]/25 rounded-2xl overflow-hidden
            shadow-xl shadow-black/5
            hover:border-[#d4af37]/60 hover:shadow-2xl
            transition-all duration-300 flex flex-col justify-between"
          >
            <div className="overflow-hidden relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-6 text-center flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#8b6914] tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
              <a
                href={`https://wa.me/${whatsapp_number}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-6
                px-6 py-2.5 rounded-md text-xs font-semibold
                bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c]
                text-white shadow-sm
                hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b89728] hover:-translate-y-0.5
                transition-all duration-200 uppercase tracking-wider"
                aria-label={`WhatsApp us about ${item.title}`}
              >
                <MessageCircle size={14} /> Message Us
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


const AboutAstrologer = () => {
  return (
    <section 
      className="relative py-24 px-6 overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
            bg-[#d4af37]/15 border border-[#d4af37]/30
            text-[#8b6914] text-xs font-semibold tracking-widest uppercase shadow-sm"
          >
            ✨ About {company_name}
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide leading-tight">
            Meet <span className="text-[#8b6914]">{company_name}</span>
          </h2>
          <div className="w-14 h-px bg-gradient-to-r from-[#d4af37] to-transparent mx-auto md:mx-0" />

          <p className="text-zinc-600 leading-relaxed text-base font-light">
            Welcome to{" "}
            <span className="font-semibold text-zinc-900">{company_name}</span>, a
            trusted and revered traditional practitioner whose expertise is deeply rooted in authentic Kerala
            astrological wisdom. His guidance has helped thousands of individuals discover{" "}
            <span className="font-medium text-[#8b6914]">
              clarity, emotional balance, and confidence
            </span>
            .
          </p>

          <p className="text-zinc-600 leading-relaxed text-base font-light">
            Through personalized traditional consultations and insightful horoscope analysis,{" "}
            {company_name} supports people in navigating vital life decisions with
            calmness, awareness, and grounded spiritual understanding.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-xs text-white
              bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c]
              shadow-md hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b89728] hover:-translate-y-0.5
              transition-all duration-200 uppercase tracking-widest"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-xs text-zinc-800
              bg-[#f4efe4] border border-[#d4af37]/30
              hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:-translate-y-0.5
              transition-all duration-200 uppercase tracking-widest"
            >
              <MessageCircle size={16} /> Chat Now
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#d4af37]/40 to-transparent blur-xl opacity-60" />
            <img
              src="https://i.pinimg.com/736x/8c/10/c9/8c10c93cddac9fc5e348e34bce41b75c.jpg"
              alt={`${company_name} practitioner - Traditional Kerala Astrologer`}
              className="relative w-full h-[420px] rounded-2xl object-cover object-top
              border border-[#d4af37]/30 shadow-2xl bg-white
              hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const AstrologyServices = () => {
  const services = [
    {
      title: "Relationship Recovery",
      desc: "Emotional challenges in relationships are common. Traditional Kerala consultation helps heal, restore trust, and bring mutual understanding between partners.",
      img: "https://i.pinimg.com/1200x/98/e4/c0/98e4c00833fe89d85305f67b8114fac6.jpg",
    },
    {
      title: "Partner Conflict Support",
      desc: "Authentic traditional guidance helps ease conflicts, resolve misunderstandings, and bring emotional balance in relationships.",
      img: "https://i.pinimg.com/736x/c6/2f/b1/c62fb1ec35a18558342ee59642913fe6.jpg",
    },
    {
      title: "Relationship Harmony",
      desc: "Holistic consultation provides a powerful spiritual path to resolve ongoing issues and restore lifelong harmony and trust.",
      img: "https://i.pinimg.com/736x/ca/e3/c5/cae3c51a185f9b101e202fd607bcaec2.jpg",
    },
    {
      title: "Family Well-being & Peace",
      desc: "Address domestic and family challenges with traditional Vastu guidance that promotes peace, positivity, and prosperity at home.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
          Our Specialties
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 tracking-wide mt-2 mb-14">
          Specialized <span className="text-[#8b6914]">Consultation Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-md border border-[#d4af37]/25 rounded-2xl overflow-hidden
              hover:border-[#d4af37]/60 shadow-xl shadow-black/5
              transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-4 text-center flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#8b6914] tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
                <a href={`tel:${phone_number}`}>
                  <button
                    className="w-full flex items-center justify-center gap-2
                    py-2.5 px-6 rounded-md mt-2
                    bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c]
                    text-white font-semibold text-xs
                    shadow-sm hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b89728] hover:-translate-y-0.5
                    transition-all duration-200 uppercase tracking-wider"
                  >
                    <Phone size={14} /> Call Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Wellness Services (image cards) ── */
const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Consultation",
      img: "https://i.pinimg.com/736x/d5/cc/3a/d5cc3ab93ab54b897879b9974cf98e08.jpg",
    },
    {
      title: "Couple Conflict Support",
      img: "https://i.pinimg.com/1200x/e9/bc/49/e9bc49862a82469563e460e67763ae35.jpg",
    },
    {
      title: "Relationship Restoration",
      img: "https://i.pinimg.com/736x/24/8a/5b/248a5bf488a9a1fa22c0f8f2a14fb16c.jpg",
    },
    {
      title: "Financial Well-being",
      img: "https://i.pinimg.com/1200x/a0/ed/c4/a0edc450b256ada45450a39612ff9cdc.jpg",
    },
  ];

  return (
    <section 
      className="py-20 px-4 overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #f4efe4 0%, #fcfaf5 50%, #f4efe4 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
            Wellness &amp; Guidance
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 tracking-wide mt-2">
            Wellness &amp; Consultation <span className="text-[#8b6914]">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group bg-white/90 backdrop-blur-md border border-[#d4af37]/25 rounded-2xl overflow-hidden
              shadow-xl shadow-black/5
              hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5 text-center flex flex-col justify-between">
                <h3 className="font-serif text-base font-semibold text-[#8b6914] tracking-wide mb-3">
                  {service.title}
                </h3>
                <a href={`tel:${phone_number}`}>
                  <button
                    className="w-full flex items-center justify-center gap-2
                    bg-[#f4efe4] border border-[#d4af37]/30 text-zinc-800 text-xs font-semibold
                    py-2.5 rounded-md
                    hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:text-[#8b6914]
                    transition-all duration-200 uppercase tracking-wider"
                  >
                    <Phone size={13} /> Call Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


 function AllServicesModern() {
  const services = [
    {
      title: "Relationship Healing & Guidance",
      icon: Heart,
      desc: "Traditional Kerala consultations to restore emotional balance, trust, and mutual understanding in relationships.",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      title: "Legal Matter Support",
      icon: Scale,
      desc: "Authentic traditional insights and personalized guidance to support clarity and peace of mind during legal challenges.",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      title: "Family Harmony & Well-being",
      icon: Users,
      desc: "Supportive consultation focused on improving domestic peace, positivity, and overall well-being in family life.",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      title: "Business & Career Direction",
      icon: Briefcase,
      desc: "Holistic astrological insights and expert guidance to help with professional growth, financial planning, and business success.",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      title: "Couple Compatibility & Support",
      icon: Users,
      desc: "Specialized consultation focused on emotional well-being, marriage compatibility, and lifelong togetherness.",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
    {
      title: "Traditional Kerala Rituals & Practices",
      icon: Sparkles,
      desc: "Sacred Kerala traditional practices and remedies aimed at inner balance, positivity, and personal grounding.",
      accent: "text-[#8b6914]",
      bg: "bg-[#d4af37]/10 border-[#d4af37]/30",
    },
  ];

  return (
    <section 
      className="py-24 px-4 text-zinc-800 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
            Full Spectrum Consultation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide mt-2">
            Our Specialist <span className="text-[#8b6914]">Services</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p className="text-zinc-600 mt-4 text-sm max-w-xl mx-auto font-light">
            Explore our comprehensive Kerala consultation services designed to bring wisdom, clarity, and peace of mind into your life.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (id % 3) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white/90 backdrop-blur-md border border-[#d4af37]/25 rounded-2xl p-8 text-center
              hover:border-[#d4af37]/60 shadow-xl shadow-black/5
              transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`mx-auto mb-6 w-16 h-16 rounded-xl flex items-center justify-center border ${service.bg}`}
                >
                  <service.icon className={`w-8 h-8 ${service.accent}`} />
                </div>

                <h3 className="font-serif text-xl font-semibold text-zinc-900 tracking-wide mb-3">
                  {service.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
              </div>

              <a href={`tel:${phone_number}`}>
                <button
                  className="w-full py-3 rounded-md font-semibold text-xs text-white
                  bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c]
                  shadow-md hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b89728] hover:-translate-y-0.5
                  transition-all duration-200 uppercase tracking-widest"
                >
                  Get in Touch
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Home Last / CTA ── */


 function HomeLastDesign() {
  return (
    <section 
      className="relative py-24 px-6 overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100% )",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#d4af37]/20 to-transparent blur-2xl" />
            <div
              className="relative w-72 h-72 md:w-88 md:h-88 rounded-full overflow-hidden
              border-2 border-[#d4af37]/40 shadow-xl shadow-black/10 bg-white"
            >
              <img
                src="https://i.pinimg.com/736x/96/57/a5/9657a59ba3ac24d8ca485737decf5e61.jpg"
                alt={`${person_name} - Kerala Consultation Expert`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 rounded-full border border-[#d4af37]/20" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
            Meet Your Expert Guide
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide leading-tight">
            {person_name}
          </h2>
          <div className="w-14 h-px bg-gradient-to-r from-[#d4af37] to-transparent mx-auto md:mx-0" />

          <h3 className="text-base md:text-lg font-medium text-[#8b6914] tracking-wide">
            Trusted Traditional Kerala Consultation &amp; Vastu Expert
          </h3>

          <p className="text-zinc-600 leading-relaxed text-sm font-light">
            With deep expertise in authentic{" "}
            <span className="text-[#8b6914] font-medium">Vastu Shastra</span>,{" "}
            <span className="text-[#8b6914] font-medium">
              horoscope interpretation
            </span>
            , and{" "}
            <span className="text-[#8b6914] font-medium">
              holistic well-being guidance
            </span>
            , {person_name} provides calm, thoughtful traditional insights to help
            individuals move forward with clarity, confidence, and peace of mind.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-xs text-white
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-xs text-zinc-800
              bg-[#f4efe4] border border-[#d4af37]/30
              hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:-translate-y-0.5
              transition-all duration-200 uppercase tracking-widest"
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>

          <p className="text-[10px] tracking-[0.18em] uppercase text-[#8b6914] font-semibold pt-1">
            ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp;
            Personal Clarity
          </p>
        </motion.div>
      </div>
    </section>
  );
}