import { Link } from "react-router-dom";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm9.25 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 sm:py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-light tracking-[0.12em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Naji Beauty
            </h3>
            <p className="font-body text-sm leading-relaxed opacity-70">
              Licensed esthetician providing luxury skincare treatments, facials, waxing, and permanent makeup services.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6 opacity-50">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/services" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Services</Link>
              <Link to="/gallery" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Gallery</Link>
              <a
                href="https://app.acuityscheduling.com/schedule/5493fd4d"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Book Online
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6 opacity-50">
              Policies
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm opacity-70">
              <p>24-hour cancellation policy</p>
              <p>Patch tests required for certain services</p>
              <p>Consultations available virtually</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-40 tracking-widest uppercase">
            © {new Date().getFullYear()} Naji Beauty. All Rights Reserved.
          </p>
          <a
            href="https://www.instagram.com/najibeauty_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Naji Beauty Instagram"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
