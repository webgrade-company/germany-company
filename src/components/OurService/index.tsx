import React from "react";
import { ArrowRight, Search, Palette, Monitor } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      illustration: (
        <div className="relative">
          {/* Design board illustration */}
          <div className="w-20 h-16 bg-white border-4 border-gray-800 rounded-lg relative">
            <div className="absolute top-2 left-2 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute top-2 left-6 w-6 h-1 bg-gray-300 rounded"></div>
            <div className="absolute top-5 left-2 w-8 h-1 bg-gray-300 rounded"></div>
            <div className="absolute top-7 left-2 w-6 h-1 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-2 w-10 h-3 bg-blue-100 rounded"></div>
          </div>
          {/* People figures */}
          <div className="absolute -left-2 bottom-0">
            <div className="w-6 h-8 bg-blue-900 rounded-t-full"></div>
          </div>
          <div className="absolute -right-2 bottom-0">
            <div className="w-6 h-8 bg-blue-900 rounded-t-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "SEO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      illustration: (
        <div className="relative">
          {/* SEO chart illustration */}
          <div className="relative">
            <div className="w-16 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-12 h-2 bg-gray-300 rounded-full mt-1"></div>
            <div className="w-8 h-1 bg-gray-300 rounded-full mt-1"></div>
          </div>
          {/* Magnifying glass */}
          <div className="absolute -right-2 -top-1">
            <div className="w-8 h-8 border-4 border-blue-600 rounded-full relative">
              <div className="absolute -right-2 -bottom-2 w-1 h-4 bg-blue-600 rotate-45 rounded"></div>
            </div>
          </div>
          {/* Person figure */}
          <div className="absolute right-4 bottom-0">
            <div className="w-6 h-8 bg-blue-900 rounded-t-full"></div>
            <div className="absolute top-0 left-1 w-4 h-4 bg-blue-700 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Web App",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
      icon: <Monitor className="w-8 h-8 text-green-600" />,
      illustration: (
        <div className="relative">
          {/* Computer screen */}
          <div className="w-20 h-12 bg-white border-4 border-gray-800 rounded-lg relative">
            <div className="absolute top-1 left-1 w-2 h-1 bg-blue-500 rounded"></div>
            <div className="absolute top-3 left-1 w-6 h-1 bg-blue-400 rounded"></div>
            <div className="absolute top-5 left-1 w-4 h-1 bg-gray-300 rounded"></div>
            <div className="absolute top-7 left-1 w-8 h-2 bg-blue-100 rounded"></div>
            <div className="absolute top-1 right-1 w-4 h-4 bg-blue-200 rounded"></div>
          </div>
          {/* Person with laptop */}
          <div className="absolute -left-1 bottom-0">
            <div className="w-6 h-6 bg-blue-900 rounded-t-full"></div>
            <div className="absolute -bottom-2 left-1 w-8 h-2 bg-gray-700 rounded"></div>
          </div>
          {/* Floating element */}
          <div className="absolute -right-1 -top-1 w-3 h-3 bg-blue-400 rounded transform rotate-45"></div>
        </div>
      ),
    },
  ];

  return (
    <div id="our" className="bg-black relative py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300 mb-4">
            Our Services
          </h2>
        </div>
        <div className="absolute z-0 top-5 left-5  w-54 h-54 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
        </div>
        <div className="absolute z-0 bottom-5 right-5  w-54 h-54 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
        </div>
        ;{/* Services Grid */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 w-80 h-100 flex flex-col items-center rounded-3xl px-2 py-5 transition-all duration-300 hover:transform hover:scale-105 border border-white/20 shadow-xl"
            >
              {/* Illustration */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-20 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl p-4">
                  {service.illustration}
                </div>
              </div>

              <div className="px-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* View All Services Button */}
        {/* <div className="text-center">
          <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md shadow-green-400 flex items-center gap-3 mx-auto group">
            View All Services
            <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
}
