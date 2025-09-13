"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { t } = useLanguage();

  const faqData = [
    {
      question: t("faq.problem-1"),
      answer: t("faq.answer-1"),
    },
    {
      question: t("faq.problem-2"),
      answer: t("faq.answer-2"),
    },
    {
      question: t("faq.problem-3"),
      answer: t("faq.answer-3"),
    },
    {
      question: t("faq.problem-4"),
      answer: t("faq.answer-4"),
    },
    {
      question: t("faq.problem-5"),
      answer: t("faq.answer-5"),
    },
  ];

  const toggleAccordion = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen relative bg-gradient-to-b from-black from-50%  via-black via-50% to-green-950 py-16 px-4"
    >
      <div className="absolute z-0 top-30 left-20  w-54 h-54 rounded-full flex items-center justify-center animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
      </div>
      <div className="absolute z-0 hidden  bottom-50 right-20  w-54 h-54 rounded-full md:flex items-center justify-center animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
          {t("faq.title")}
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-4xl overflow-hidden transition-all duration-300 hover:bg-slate-800/70"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between text-white hover:text-green-300 transition-colors duration-300"
              >
                <span className="text-lg font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
