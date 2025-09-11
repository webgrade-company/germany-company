import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import aboutImg from "../../../public/images/aboutImg.jpg";

export default function AboutSection() {
  return (
    <div id="about" className="bg-gradient-to-br relative from-slate-900 via-green-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="absolute z-0 top-5 left-5  w-54 h-54 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
              About Us
            </h2>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Aliquam diam nunc risus
              neque. Cras bibendum mauris accumsan enim. Consectetur interdum
              convallis et in amet. Nunc a nisl augue et euismod aliquam lacus.
              Lorem ipsum dolor sit amet consectetur. Aliquam diam nunc.
            </p>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group">
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Floating decorative dots */}
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-60 left-32 w-2 h-2 bg-teal-300 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Right Side - Image Container */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Floating decorative circles */}
            <div className="absolute -left-2 -top-10 md:top-8 md:left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-10 right-0 w-24 h-24 bg-gradient-to-br from-teal-400 to-green-500 rounded-full opacity-60 animate-pulse delay-700"></div>
            <div className="absolute top-32 -right-2 w-4 h-4 bg-green-300 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-teal-200 rounded-full animate-pulse delay-1000"></div>

            {/* Main Image Container */}
            <div className="relative z-10 max-w-lg w-full">
              <div className="relative rounded-3xl p-2 shadow-md">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden relative">
                  <Image src={aboutImg.src} fill alt="this about img" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
