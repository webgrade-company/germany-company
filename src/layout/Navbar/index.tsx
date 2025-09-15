"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const NavbarLayout = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState(t("nav.home"));
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const menuRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    setActive(t("nav.home"));
  }, [t]);

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored) {
      setLanguage(stored as "en" | "ru");
    }
  }, [setLanguage]);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const menuItems = [
    { name: t("nav.home") as string, href: "hero" },
    { name: t("nav.about") as string, href: "about" },
    { name: t("nav.service") as string, href: "services" },
    // { name: t("nav.career") as string, href: "career" },
    { name: t("nav.faq") as string, href: "faq" },
    { name: t("nav.contec") as string, href: "contact" },
  ];

  const handleScroll = (item: { name: string; href: string }) => {
    setActive(item.name);
    const element = document.getElementById(item.href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    if (window.scrollY === 0) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`w-full h-16 fixed top-0 z-50 transition-transform duration-300 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center px-6 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white"> {t("nav.title")} </h2>

        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <span
              key={index}
              onClick={() => handleScroll(item)}
              className={`cursor-pointer transition-all duration-200 py-1 ${
                active === item.name
                  ? "bg-green-500 px-5 rounded-2xl text-white"
                  : "hover:text-green-300 text-white"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Select
            value={language}
            onValueChange={(val) => {
              setLanguage(val as "en" | "ru");
              localStorage.setItem("language", val);
            }}
            onOpenChange={(open) => setIsOpen(open)}
          >
            <SelectTrigger className="w-[140px] bg-green-700 text-white rounded-lg">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent className="bg-green-900 text-white">
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
          <div
            ref={menuRef}
            className={`absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-md shadow-lg md:hidden flex flex-col items-center gap-4 py-6 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {menuItems.map((item, index) => (
              <span
                key={index}
                onClick={() => handleScroll(item)}
                className={`cursor-pointer transition-all duration-200 py-1 ${
                  active === item.name
                    ? "bg-green-500 px-5 rounded-2xl text-white"
                    : "hover:text-green-300 text-white"
                }`}
              >
                {item.name}
              </span>
            ))}
            <Select
              value={language}
              onValueChange={(val) => {
                setLanguage(val as "en" | "ru");
                localStorage.setItem("language", val);
              }}
            >
              <SelectTrigger className="w-[140px] bg-green-700 text-white rounded-lg">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent className="bg-green-900 text-white">
                <SelectGroup>
                  <SelectLabel>Language</SelectLabel>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ru">Russian</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
      </div>
    </nav>
  );
};

export default NavbarLayout;
