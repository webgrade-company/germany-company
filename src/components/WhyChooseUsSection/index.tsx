"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import whyChooseUs from "../../../public/images/whyChoosUs.jpg";
import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <div className="bg-black relative py-16 overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg lg:text-xl text-green-400 font-semibold uppercase tracking-wider underline underline-offset-4">
                Why Choose Us
              </h3>

              <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300 leading-tight">
                We're Company Service Pvt Ltd
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Aliquam diam nunc risus
              neque. Cras bibendum mauris accumsan enim. Consectetur interdum
              convallis et in amet. Nunc a nisl augue et euismod aliquam lacus.
              Lorem ipsum dolor sit amet consectetur. Aliquam diam nunc.
            </p>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group">
                Explore
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Side - Image Container */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Floating decorative circles */}
            <div className="absolute -top-10 -left-2 md:-top-10 md:left-13 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-2 md:-bottom-10 md:-right-10 w-28 h-28 bg-gradient-to-br from-teal-400 to-green-500 rounded-full opacity-60 animate-pulse delay-700"></div>
            <div className="absolute top-32 right-16 w-4 h-4 bg-green-300 rounded-full animate-pulse delay-300"></div>

            <div className="relative z-10 max-w-lg w-full">
              <div className="relative rounded-3xl shadow-md group">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden relative">
                  <Image
                    src={whyChooseUs.src}
                    fill
                    alt="Business team in meeting discussing strategies"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
