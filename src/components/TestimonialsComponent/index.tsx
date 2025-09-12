import Image from "next/image";
import React from "react";
import { SiComma } from "react-icons/si";

import animaIMg from '../../../public/images/anime.png';

const TestimonialsComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-green-700 py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mt-20 relative">
        <div
          className="absolute top-100 md:top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        flex items-center justify-center w-[400px] h-[400px] 
                        bg-teal-700 rounded-full opacity-20 z-0"
        >
          <SiComma className="text-[150px] text-white" />
          <SiComma className="text-[150px] text-white" />
        </div>

        <div className="relative z-10">
          <h3 className="text-white underline text-center text-sm font-medium tracking-widest uppercase mb-4">
            TESTIMONIALS
          </h3>
          <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-200">
            The Trust From Clients
          </h1>
          <p className="text-white mt-25 text-center text-2xl max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            molestiae inventore corporis? Libero unde dolore iusto excepturi?
            Alias culpa odio maxime dicta aspernatur quis dolores ut voluptas,
            quos eveniet. Ab?Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quis, quasi.
          </p>
          <div className="p-[2px] w-50 h-auto mx-auto mt-15 rounded-xl bg-gradient-to-br from-black via-gray-400 to-white">
            <div className="bg-gradient-to-b rounded-2xl gap-5 shadow-2xl flex items-center px-2 py-2 from-green-900 to-green-800">
              <div className="relative w-10  h-10 bg-teal-600 rounded-full">
                <Image src={animaIMg.src} fill alt="ehis client message" />
              </div>
              <h4 className="text-2xl text-white">Mahliyo.H</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
