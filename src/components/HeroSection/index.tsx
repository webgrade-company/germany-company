"use client"
import Image from "next/image";
import React from "react";
import teamImg from "../../../public/images/teamImg.png";
import { useLanguage } from "@/context/language-context";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div
      id="hero"
      className="min-h-screen relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center p-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="space-y-2">
            <h2 className="text-lg z-10 lg:text-xl text-green-300 font-normal">
              {t("hero.welcome")[0]}{" "}
              <span className="underline font-semibold">
                {t("hero.welcome")[1]}
              </span>
            </h2>
          </div>

          <div className="absolute z-0 top-5 left-5  w-54 h-54 rounded-full flex items-center justify-center animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
          </div>

          <div className="absolute z-0 bottom-15 right-20  w-54 h-54 rounded-full flex items-center justify-center animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              {t("hero.title")[0]}{" "}
              <span className="text-green-400"> {t("hero.title")[1]} </span>,
            </h1>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-green-400">{t("hero.title")[2]}</span>{" "}
              {t("hero.title")[3]}
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
            {t("hero.text")}
          </p>
          <div className="pt-6">
            <button className="bg-gradient-to-r flex items-center gap-3 from-green-500 to-teal-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-300 shadow-lg hover:shadow-xl group">
              {t("hero.button")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          {/* Floating dots for left side */}
          <div className="absolute bottom-32 left-16 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Background decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          </div>

          {/* Floating dots around the image */}
          <div className="absolute top-16 right-20 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-8 w-3 h-3 bg-green-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-24 left-12 w-5 h-5 bg-teal-300 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-40 right-16 w-2 h-2 bg-green-200 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-8 left-24 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-12 right-32 w-4 h-4 bg-green-300 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-20 left-8 w-2 h-2 bg-green-200 rounded-full animate-pulse delay-800"></div>
          <div className="absolute bottom-60 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-600"></div>

          {/* Main geometric background shape */}
          <div className="relative z-10 flex items-center justify-center">
            {/* Multi-sided geometric shape background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 via-teal-400 to-green-500 opacity-90 shadow-2xl transform rotate-12"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              ></div>

              {/* Inner decorative border */}
              <div
                className="absolute w-72 h-72 lg:w-88 lg:h-88 border-4 border-green-300/30 transform rotate-12"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              ></div>
            </div>

            {/* Professional woman image container */}
            <div className="relative z-20 w-80 h-80 lg:w-116 lg:h-116 flex items-center justify-center">
              <Image
                src={teamImg.src}
                width={500}
                height={500}
                alt="this Team images"
                className="absolute -top-24"
                sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
