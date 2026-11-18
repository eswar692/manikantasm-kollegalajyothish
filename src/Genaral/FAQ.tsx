import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { person_name, phone_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet ${person_name} in Person for Astrological Consultation?`,
    answer: `Yes, exclusive in-person traditional consultation sessions are available with prior appointment. 📲 Connect on WhatsApp: ${phone_number}`,
  },
  {
    question: "Is Phone Consultation Available Across India?",
    answer: `Yes, you can easily book a direct phone consultation with ${person_name} from anywhere in India. 📞 Phone: ${phone_number}`,
  },
  {
    question: "What Types of Consultation Services Are Offered?",
    answer:
      "We provide expert guidance in Vastu Shastra, horoscope reading and analysis, career planning, marriage compatibility support, health & well-being, and business growth direction.",
  },
  {
    question: "What Traditional Wellness Products Are Available?",
    answer:
      "Authentic Kerala traditional wellness products, certified natural gemstones, and spiritual well-being items are available upon request.",
  },
  {
    question: "Are Traditional Knowledge Learning Sessions Offered?",
    answer:
      "Yes, structured traditional knowledge learning sessions are available for beginners and advanced seekers across different learning levels.",
  },
  {
    question: "What Topics Are Covered in Learning Sessions?",
    answer:
      "Our comprehensive learning sessions cover advanced horoscope reading, palmistry basics, and traditional Kerala astrological knowledge practices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative py-24 px-6 overflow-hidden text-zinc-800"
      style={{
        background: "linear-gradient(135deg, #fcfaf5 0%, #f4efe4 50%, #fcfaf5 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b6914]">
            Got Questions?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-wide mt-3">
            Frequently Asked <span className="text-[#8b6914]">Questions</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p className="text-zinc-600 mt-5 text-sm font-light max-w-md mx-auto leading-relaxed">
            Clear answers to help you understand our consultation process and services.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden transition-all duration-300 backdrop-blur-md
                  ${
                    isOpen
                      ? "bg-white border-[#d4af37]/60 shadow-lg shadow-black/5"
                      : "bg-white/90 border-[#d4af37]/25 hover:border-[#d4af37]/50"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 cursor-pointer"
                >
                  <span
                    className={`font-serif text-base md:text-lg font-medium tracking-wide transition-colors duration-200
                    ${isOpen ? "text-[#8b6914]" : "text-zinc-800 hover:text-[#8b6914]"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center border transition-all duration-300
                    ${
                      isOpen
                        ? "bg-[#d4af37]/15 border-[#d4af37] rotate-180"
                        : "bg-[#f4efe4] border-[#d4af37]/30"
                    }`}
                  >
                    <ChevronDown
                      size={15}
                      className={isOpen ? "text-[#8b6914]" : "text-zinc-600"}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-[#d4af37]/40 to-transparent mb-4" />
                    <p className="text-zinc-600 text-sm leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href={`https://wa.me/${phone_number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex items-center gap-3
            px-8 py-3.5 rounded-md font-semibold text-xs text-white
            bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c]
            shadow-md hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#b89728] hover:-translate-y-0.5
            transition-all duration-200 uppercase tracking-widest"
          >
            <MessageCircle size={17} />
            Chat With Us
          </a>
        </div>

        <p className="text-center text-[10px] tracking-[0.18em] uppercase text-[#8b6914] font-semibold mt-8">
          ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp; Personal
          Clarity
        </p>
      </div>
    </section>
  );
}