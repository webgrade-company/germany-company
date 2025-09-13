"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

// Translations
const translations = {
  en: {
    // Navbar_Section
    "nav.home": "Home",
    "nav.about": "About",
    "nav.service": "Service",
    "nav.career": "Career",
    "nav.faq": "FAQ",
    "nav.contec": "Contact",
    "nav.title": "company",

    //Hero Section

    "hero.welcome": ["Welcome to", "OOO ASI GLOBAL!"],
    "hero.title": ["Your", "Problems", "Our", "Solutions"],
    "hero.text":
      "Elevate and Transform your business to Digital with our Innovative Ideas.",
    "hero.button": "Explore",

    // Scroll Text
    "scroll.title": "Welcome to OOO ASI GLOBAL",

    // Our Service
    "our.title": "Our Services",
    "our.card_title-0": "Graphic Design",
    "our.card_text-0":
      "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-1": "Graphic Design",
    "our.card_text-1":
      "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-2": "Graphic Design",
    "our.card_text-2":
      "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-3": "Graphic Design",
    "our.card_text-3":
      "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-4": "Graphic Design",
    "our.card_text-4":
      "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-5": "Graphic Design",
    "our.card_text-5":
      "Lorem ipsum dolor sit amet consectetur. Tempor tellus integer urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",

    //About Us
    "about.title": "About Us",
    "about.text":
      "Lorem ipsum dolor sit amet consectetur. Aliquam diam nunc risus neque. Cras bibendum mauris accumsan enim. Consectetur interdum convallis et in amet. Nunc a nisl augue et euismod aliquam lacus. Lorem ipsum dolor sit amet consectetur. Aliquam diam nunc.",
    "about.button": "Read More",

    // FAQ
    "faq.title": "FAQ",
    "faq.problem-1": "How much will cost?",
    "faq.answer-1":
      "The cost varies depending on your project requirements, complexity, and timeline. We provide detailed quotes after understanding your specific needs. Contact us for a free consultation and personalized pricing.",
    "faq.problem-2": "How long it takes to design?",
    "faq.answer-2":
      "Design timelines typically range from 2-8 weeks depending on project scope. Simple websites take 2-3 weeks, while complex applications may require 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
    "faq.problem-3": "How do I associate with IT Company?",
    "faq.answer-3":
      "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule a consultation to discuss your project, provide a proposal, and once approved, we'll begin working together with a clear contract and timeline.",
    "faq.problem-4": "Can ou help my current site look more Professional?",
    "faq.answer-4":
      "Absolutely! We specialize in website redesigns and improvements. We can enhance your current site's design, user experience, performance, and functionality to give it a more professional and modern appearance.",
    "faq.problem-5": "When do I pay?",
    "faq.answer-5":
      "We typically work with a payment schedule: 50% upfront to begin the project, and 50% upon completion. For larger projects, we may arrange milestone-based payments. Payment terms will be clearly outlined in your contract.",

    //TESTIMONIALS
    "testimonia.enter": "TESTIMONIALS",
    "testimonia.title": "The Trust From Clients",
    "testimonia.text":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae inventore corporis? Libero unde dolore iusto excepturi? Alias culpa odio maxime dicta aspernatur quis dolores ut voluptas, quos eveniet. Ab?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, quasi.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "conteat.name": "Name",
    "conteat.phone": "Contact Number",
    "conteat.email": "Email",
    "conteat.message": "Your Message",
    "contact.button": "SUBMIT",

    // Footer
    "footer.col.title-1": "OOO ASI GLOBAL Services Pvt Ltd",
    "footer.col.text-1":
      "IT Services and IT Consulting, 11-50 employees, Headquarters Dehradun, Uttarakhand, Type Public Company.",
    "footer.address": "Chilonzor, TK, Uzbekistan",
    "footer.col.title-2": "Quick Links",
    "footer.home": "Home",
    "footer.aboyt": "About",
    "footer.service": "Service",
    "footer.terms": "Terms & Conditions",
    "footer.faq": "FAQ",
    "footer.col.title-3": "Useful Links",
    "footer.why": "Why Choose Us",
    "footer.our": "Our Achievements",
    "footer.termsOf": "Terms Of Service",
    "footer.policy": "Privacy Policy",
    "footer.col.title-4": "Our Features",
    "footer.col.text-4":
      "With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything Your Brand Needs. Subscribe Here To Get Our Latest Updates.",
    "footer.button": "Subscribe Now",
    "footer.end": "© 2025 Company Services Pvt Ltd. All rights reserved",
  },
  ru: {
    // Navbar_Section
    "nav.home": "Дом",
    "nav.about": "О",
    "nav.service": "Услуга",
    "nav.career": "Карьера",
    "nav.faq": "ЧЗВ",
    "nav.contec": "Контекст",
    "nav.title": "Компания",

    //Hero Section

    "hero.welcome": ["Добро пожаловать в", "OOO ASI GLOBAL!"],
    "hero.title": ["Твой", "Проблемы", "Наш", "Решения"],
    "hero.text":
      "Поднимите и трансформируйте свой бизнес в цифровой формат c помощью наших инновационных идей.",
    "hero.button": "Исследовать",

    // Scroll Text
    "scroll.title": "Добро пожаловать в OOO ASI GLOBAL",

    // Our Service
    "our.title": "Наши услуги",
    "our.card_title-0": "Графический дизайн",
    "our.card_text-0":
      "Lorem ipsum dolor сидеть amet consectetur. Tempor Tellus целое число urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-1": "Графический дизайн",
    "our.card_text-1":
      "Lorem ipsum dolor сидеть amet consectetur. Tempor Tellus целое число urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-2": "Графический дизайн",
    "our.card_text-2":
      "Lorem ipsum dolor сидеть amet consectetur. Tempor Tellus целое число urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-3": "Графический дизайн",
    "our.card_text-3":
      "Lorem ipsum dolor сидеть amet consectetur. Tempor Tellus целое число urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-4": "Графический дизайн",
    "our.card_text-4":
      "Lorem ipsum dolor сидеть amet consectetur. Tempor Tellus целое число urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",
    "our.card_title-5": "Графический дизайн",
    "our.card_text-5":
      "Lorem ipsum dolor сидеть amet consectetur. Tempor Tellus целое число urna risus. Molestie tempus posuere egestas laoreet eget nisl. Malesuada sit est non etiam in lacus",

    //About Us
    "about.title": "О нас",
    "about.text":
      "Lorem ipsum dolor сидеть amet consectetur. Aliquam diam nunc risus neque. Cras bibendum mauris accumsan enim. Consectetur interdum convallis et in amet. Nunc a nisl augue et euismod aliquam lacus. Lorem ipsum dolor сидеть amet consectetur. Аликвам диам нунк.",
    "about.button": "Читать далее",

    // FAQ
    "faq.title": "ЧЗВ",
    "faq.problem-1": "Сколько это будет стоить?",
    "faq.answer-1":
      "Стоимость варьируется в зависимости от требований вашего проекта, его сложности и сроков. Мы предоставляем подробные сметы после изучения ваших конкретных потребностей. Свяжитесь с нами для бесплатной консультации и персонального расчета стоимости.",
    "faq.problem-2": "Сколько времени занимает проектирование?",
    "faq.answer-2":
      "Сроки разработки обычно составляют от 2 до 8 недель в зависимости от объёма проекта. Разработка простых веб-сайтов занимает 2–3 недели, а сложных приложений — 6–8 недель. Подробный график мы предоставим во время первой консультации.",
    "faq.problem-3": "Как мне связаться с IT-компанией?",
    "faq.answer-3":
      "Начать легко! Просто свяжитесь с нами через наш сайт, по электронной почте или по телефону. Мы назначим консультацию, чтобы обсудить ваш проект, предоставим предложение, и после его одобрения начнём работу, заключив чёткий договор и определив сроки.",
    "faq.problem-4":
      "Можете ли вы помочь моему текущему сайту выглядеть более профессионально?",
    "faq.answer-4":
      "Конечно! Мы специализируемся на редизайне и улучшении веб-сайтов. Мы можем улучшить дизайн, удобство использования, производительность и функциональность вашего сайта, придав ему более профессиональный и современный вид.",
    "faq.problem-5": "Когда мне платить?",
    "faq.answer-5":
      "Обычно мы работаем по графику оплаты: 50% авансом при начале проекта и 50% по его завершении. Для более крупных проектов мы можем организовать поэтапную оплату. Условия оплаты будут чётко прописаны в вашем договоре.",

    //TESTIMONIALS
    "testimonia.enter": "ОТЗЫВЫ",
    "testimonia.title": "Доверие клиентов",
    "testimonia.text":
      "Lorem ipsum dolor сидеть amet consectetur adipisicing elit. Ipsam molestiae Invente Corporis? Libero unde dolore iusto кроме? Псевдоним culpa odio maxime dicta aspernatur quis dolores ut voluptas, quos Eveniet. Ab?Lorem ipsum, скорбь сидит амет консектетур adipisicing элита. Это, квази.",

    // Contact Section
    "contact.title": "Свяжитесь с нами",
    "contact.info.title": "Контактная информация",
    "contact.info.address": "Адрес",
    "contact.info.phone": "Телефон",
    "contact.info.email": "Электронная почта",
    "conteat.name": "Имя",
    "conteat.phone": "Контактный номер",
    "conteat.email": "Электронная почта",
    "conteat.message": "Ваше сообщение",
    "contact.button": "Oтправить",

    // Footer
    "footer.col.title-1": "OOO ASI GLOBAL Услуги Pvt Ltd",
    "footer.col.text-1":
      "ИТ-услуги и ИТ-консалтинг, 11-50 сотрудников, штаб-квартира в Дехрадуне, Уттаракханд, тип: публичная компания.",
    "footer.address": "Чиланзар, TK, Узбекистан",
    "footer.col.title-2": "Быстрые ссылки",
    "footer.home": "Дом",
    "footer.aboyt": "О",
    "footer.service": "Услуга",
    "footer.terms": "Условия использования",
    "footer.faq": "ЧЗВ",
    "footer.col.title-3": "Полезные ссылки",
    "footer.why": "Почему выбирают нас",
    "footer.our": "Наши достижения",
    "footer.termsOf": "Условия использования",
    "footer.policy": "политика конфиденциальности",
    "footer.col.title-4": "Наши возможности",
    "footer.col.text-4":
      "Объединив наши навыки, вы получите команду, способную сделать всё, что нужно вашему бренду. Подпишитесь здесь, чтобы получать наши последние обновления.",
    "footer.button": "Подпишитесь сейчас",
    "footer.end": "© 2025 Company Services Pvt Ltd. Все права защищены.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language;
    if (stored && ["ru", "en"].includes(stored)) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string | string[] => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
