import { Link, useLocation } from "react-router-dom";

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
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="px-4 py-4 sm:px-6 md:px-16 md:py-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            onClick={(event) => {
              if (isHomePage) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="font-display text-lg sm:text-xl md:text-2xl font-light tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.3em] text-primary-foreground uppercase"
          >
            Naji Beauty
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto whitespace-nowrap pb-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(event) => {
                  if (item.path === "/" && isHomePage) {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`font-body text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.25em] uppercase transition-opacity duration-300 text-primary-foreground ${
                  location.pathname === item.path ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/najibeauty_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Naji Beauty Instagram"
              className="text-primary-foreground opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
