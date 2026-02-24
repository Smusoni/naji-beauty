import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm9.25 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-16 md:py-6">
        <Link
          to="/"
          className="font-display text-lg sm:text-xl md:text-2xl font-light tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.3em] text-primary-foreground uppercase"
        >
          Naji Beauty
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-xs tracking-[0.25em] uppercase transition-opacity duration-300 text-primary-foreground ${
                location.pathname === item.path ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://app.acuityscheduling.com/schedule/5493fd4d"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            Book Now
          </a>
          <a
            href="https://www.instagram.com/najibeauty_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Naji Beauty Instagram"
            className="text-primary-foreground opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 p-1"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-primary-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-primary-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-primary-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary flex items-center justify-center mix-blend-normal px-6"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-2xl sm:text-3xl tracking-[0.12em] sm:tracking-[0.2em] text-secondary-foreground uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://app.acuityscheduling.com/schedule/5493fd4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl sm:text-3xl tracking-[0.12em] sm:tracking-[0.2em] text-secondary-foreground uppercase"
                >
                  Book Now
                </a>
              </motion.div>
              <motion.a
                href="https://www.instagram.com/najibeauty_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Naji Beauty Instagram"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <InstagramIcon />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
