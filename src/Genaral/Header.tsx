import { MenuIcon, X, Sparkles, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  company_name, phone_number } from "./secrete";

const Header = () => {
  return (
    <header
      className="w-full sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(255, 255, 255, 0.92)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
        boxShadow: "0 4px 25px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, #d4af37, #f5e27a, #8b6914, #d4af37)",
        }}
      />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-3.5">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

const Logo = () => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left: Logo + Info */}
      <div className="flex items-center gap-4 md:gap-5">
        {/* Logo with ornate gold border */}
        <div
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          className="relative cursor-pointer flex-shrink-0"
          style={{ width: "60px", height: "60px" }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, #d4af37, #f5e27a, #d4af37, #8b6914, #d4af37)",
              animation: "spin 12s linear infinite",
              opacity: imgHovered ? 1 : 0.7,
              transition: "opacity 0.3s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "2px",
              borderRadius: "50%",
              background: "#ffffff",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "4px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="https://i.pinimg.com/736x/d1/c3/11/d1c31121738ef3dcd0ac6a73550d35ca.jpg"
              alt={`${company_name} Logo`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: imgHovered ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.4s ease",
              }}
            />
          </div>
        </div>

        {/* Text block */}
        <div className="flex flex-col">
          <Link to="/" className="inline-block text-decoration-none">
            <h1
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontWeight: 700,
                fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                lineHeight: 1.15,
              }}
            >
              {company_name}
            </h1>
          </Link>

          {/* Est. badge */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className="flex items-center gap-1 text-[#8b6914]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              <Sparkles size={10} className="text-[#d4af37]" />
              Est. 1950
            </span>
          </div>

        
        </div>
      </div>

      {/* Right: Navigation Menu */}
      <Menu />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Cormorant+Garamond:ital,wght@1,600&family=DM+Sans:wght@400;500&family=Outfit:wght@400;500;600&display=swap');
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-1.5">
        {["Home", "About", "Services", "Testimonials", "Contact"].map((item, i) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            delay={i * 0.05}
          >
            {item}
          </NavLink>
        ))}

        {/* CTA Button */}
        <li className="ml-3">
          <Link
            to="/contact"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
              padding: "10px 22px",
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
              display: "inline-block",
              border: "1px solid rgba(212,175,55,0.4)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "linear-gradient(135deg, #d4af37 0%, #b89728 100%)";
              el.style.color = "#ffffff";
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 6px 20px rgba(212,175,55,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)";
              el.style.color = "#ffffff";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
            }}
          >
            Get in Touch
          </Link>
        </li>
      </ul>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[#d4af37]/40 bg-[#d4af37]/10 cursor-pointer active:scale-95 transition-all"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <MenuIcon size={20} color="#8b6914" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li className="list-none">
      <Link
        to={to}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.85rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: hovered ? "#b89728" : "#4a4a4a",
          textDecoration: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          position: "relative",
          transition: "color 0.2s ease",
          display: "block",
        }}
      >
        {children}
        {/* Underline pill indicator */}
        <span
          style={{
            position: "absolute",
            bottom: "4px",
            left: "14px",
            right: "14px",
            height: "2px",
            background: "#d4af37",
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.25s ease",
            borderRadius: "2px",
          }}
        />
      </Link>
    </li>
  );
};

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        animation: "fadeIn 0.25s ease",
        overflowY: "auto",
      }}
    >
      {/* Top bar inside mobile menu */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#1a1a1a",
          }}
        >
          {company_name}
        </span>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="w-9 h-9 rounded-full border border-gray-300 bg-gray-50 flex items-center justify-center cursor-pointer active:scale-95"
        >
          <X size={18} color="#333" />
        </button>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-2.5 p-0 list-none">
        {["Home", "About", "Services", "Testimonials", "Contact"].map(
          (item, i) => (
            <li key={item} style={{ animationDelay: `${i * 0.05}s` }}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  borderRadius: "8px",
                  border: "1px solid rgba(212,175,55,0.2)",
                  background: "rgba(252, 250, 245, 0.8)",
                  color: "#1a1a1a",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#d4af37";
                  el.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(252, 250, 245, 0.8)";
                  el.style.color = "#1a1a1a";
                }}
              >
                <span>{item}</span>
                <span style={{ fontSize: "1.1rem", opacity: 0.6 }}>›</span>
              </Link>
            </li>
          ),
        )}
      </ul>

      {/* Mobile Footer Info */}
      <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col gap-2.5 text-xs text-gray-600">
      
        <div className="flex items-center gap-2 text-[#8b6914] font-semibold">
          <Phone size={14} />
          <span>+91 {phone_number}</span>
        </div>
      </div>
    </div>
  );
};