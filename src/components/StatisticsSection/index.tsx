"use client";
import React, { useState, useEffect } from "react";
import { Clock, CheckCircle, Heart } from "lucide-react";
import teamImg from "../../../public/images/team.jpg";
import Image from "next/image";

export default function StatisticsSection() {
  // Counter animation
  const [counts, setCounts] = useState({
    hours: 0,
    projects: 0,
    clients: 0,
  });

  const finalCounts = {
    hours: 1500,
    projects: 50,
    clients: 40,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      hours: finalCounts.hours / steps,
      projects: finalCounts.projects / steps,
      clients: finalCounts.clients / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        hours: Math.min(
          Math.floor(increment.hours * currentStep),
          finalCounts.hours
        ),
        projects: Math.min(
          Math.floor(increment.projects * currentStep),
          finalCounts.projects
        ),
        clients: Math.min(
          Math.floor(increment.clients * currentStep),
          finalCounts.clients
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const statistics = [
    {
      id: 1,
      icon: <Clock className="w-8 h-8" />,
      count: counts.hours,
      label: "Working Hours",
      color: "text-blue-400",
    },
    {
      id: 2,
      icon: <CheckCircle className="w-8 h-8" />,
      count: counts.projects,
      label: "Completed Projects",
      color: "text-green-400",
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8" />,
      count: counts.clients,
      label: "Happy Clients",
      color: "text-pink-400",
    },
  ];

  return (
    <div className="relative md:h-150 flex items-center justify-center p-4">
      <div className="absolute inset-0">
        {/* Next.js Image placeholder - replace with actual Next.js Image component */}
        <div className="w-full h-full relative">
          <Image
            src={teamImg.src}
            fill
            alt="Professional team working in modern office"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Statistics Cards Overlay */}
      <div className="relative z-10 w-full  mx-auto">
        <div className="flex flex-col md:flex-row md:justify-around gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-16 h-16 ${stat.color} bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30`}
                >
                  {stat.icon}
                </div>
              </div>

              {/* Count */}
              <div
                className={`text-5xl lg:text-6xl font-bold ${stat.color} mb-4 font-mono`}
              >
                {stat.count.toLocaleString()}
              </div>

              {/* Label */}
              <h3 className="text-xl lg:text-2xl font-semibold text-white">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
