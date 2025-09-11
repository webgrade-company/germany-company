import { div } from "framer-motion/client";
import { VelocityScroll } from "../VelocityScroll";

export default function ScrollBasedVelocityDemo() {
  return (
    <div className="bg-black text-white">
      <VelocityScroll
        className="px-6 text-center text-4xl font-bold tracking-tight md:text-7xl md:leading-[5rem]"
        text="Welcome to Company"
        default_velocity={5}
      />
    </div>
  );
}
