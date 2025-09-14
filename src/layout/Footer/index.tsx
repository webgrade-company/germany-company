"use client"
import { useLanguage } from "@/context/language-context";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const FooterComponent = () => {

  const { t } = useLanguage();

  const quickLinks = [
    { name: t("footer.home"), href: "hero" },
    { name: t("footer.aboyt"), href: "about" },
    { name: t("footer.service"), href: "services" },
    { name: t("footer.terms"), href: "career" },
    { name: t("footer.faq"), href: "faq" },
  ];

  const usefulLinks = [
    { name: t("footer.why"), href: "#" },
    { name: t("footer.our"), href: "#" },
    { name: t("footer.termsOf"), href: "#" },
    { name: t("footer.policy"), href: "#" },
  ];

  const socialIcons = [
    {
      icon: Facebook,
      href: "https://facebook.com/company",
      bgColor: "bg-blue-600",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/company",
      bgColor: "bg-sky-500",
      label: "Twitter",
    },
    {
      icon: () => (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.1.119.112.224.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.16-1.507-.701-2.448-2.898-2.448-4.648 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
        </svg>
      ),
      href: "https://pinterest.com/company",
      bgColor: "bg-red-600",
      label: "Pinterest",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company",
      bgColor: "bg-blue-700",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/company",
      bgColor: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-green-950 via-green-900 to-teal-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-center sm:justify-end space-x-4 mb-10">
          {socialIcons.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
                className={`w-12 h-12 ${social.bgColor} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <IconComponent />
              </a>
            );
          })}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold whitespace-nowrap md:mr-10 mb-4 text-teal-300">
                {t("footer.col.title-1")}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t("footer.col.text-1")}
              </p>

              <address className="space-y-3 not-italic">
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin
                    className="w-4 h-4 text-teal-400"
                    aria-hidden="true"
                  />
                  <span className="text-sm">{t("footer.address")}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-4 h-4 text-teal-400" aria-hidden="true" />
                  <a
                    href="tel:+4917661084330"
                    className="text-sm hover:text-teal-300 transition-colors"
                  >
                    +49 176 61084330
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-4 h-4 text-teal-400" aria-hidden="true" />
                  <a
                    href="mailto:asiglobalit@sgafurbekov.com"
                    className="text-sm hover:text-teal-300 transition-colors"
                  >
                    asiglobalit@sgafurbekov.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-teal-300">
              {t("footer.col.title-2")}
            </h3>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.href}`}
                      className="text-slate-300 hover:text-teal-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Useful Links */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-teal-300">
              {t("footer.col.title-3")}
            </h3>
            <nav>
              <ul className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-teal-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div> */}

          {/* Our Features / Newsletter */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-teal-300">
              {t("footer.col.title-4")}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t("footer.col.text-4")}
            </p>

            <form action="#" method="POST" className="space-y-4">
              <div className="relative">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {t("footer.button")}
              </button>
            </form>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {t("footer.end")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
