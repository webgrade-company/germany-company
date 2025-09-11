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

const NavbarLayout = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("Home");

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(window.scrollY);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // const menuItems = ["Home", "About", "Service", "Career", "Contact", "FAQ"];

  const menuItems = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Service", href: "hero" },
    { name: "Career", href: "hero" },
    { name: "Contact", href: "hero" },
    { name: "FAQ", href: "hero" },
  ];
  return (
    <nav
      className={`w-full h-16 md:h-16 fixed top-0 z-50 transition-transform duration-300 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center p-8 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1400px] w-[1400px] mx-auto flex justify-between items-center">
        <div className="text-white">
          <h2 className="text-2xl font-medium text-white">Companiy</h2>
        </div>
        <div className="text-white flex items-center gap-5 bg-gradient-to-r from-green-700/50 via-green-600/50 to-green-700/50 px-10 py-2 rounded-3xl shadow-lg shadow-green-500/40">
          {menuItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                setActive(item.name);
                const element = document.getElementById(item.href);
                if(element){
                  const y = element.getBoundingClientRect().top + window.scrollY - 50;
                  window.scrollTo({top: y, behavior: 'smooth'})
                }
              }} // bosilganda active bo‘ladi
              className={`cursor-pointer transition-all duration-200 ${
                active === item.name
                  ? "bg-green-500 px-5 py-1 rounded-2xl"
                  : "hover:text-green-300 py-1"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div>
          <Select defaultValue="eng">
            <SelectTrigger className="w-[180px] bg-green-700 text-white hover:bg-green-700 rounded-lg">
              <SelectValue
                className="text-white [&[data-placeholder]]:text-white"
                placeholder="Select a language"
              />
            </SelectTrigger>
            <SelectContent className="bg-green-900 text-white">
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="eng">English</SelectItem>
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
