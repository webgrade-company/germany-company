"use client"
import { div } from "framer-motion/client";
import { VelocityScroll } from "../VelocityScroll";
import { useLanguage } from "@/context/language-context";

export default function ScrollBasedVelocityDemo() {

  const { t } = useLanguage()

  return (
    <div className="bg-black text-white">
      <VelocityScroll
        className="px-6 text-center text-4xl font-bold tracking-tight md:text-7xl md:leading-[5rem]"
        text={`${t("scroll.title")}`}
        default_velocity={5}
      />
    </div>
  );
}
