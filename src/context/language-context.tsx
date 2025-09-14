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
    "nav.title": "ASI Global IT",

    //Hero Section

    "hero.welcome": ["IT Solutions for Every Challenge"],
    "hero.title": ["Your", "Problems", "IT", "Answers"],
    "hero.text": "Turning Issues Into IT Solutions",
    "hero.button": "Explore",

    // Scroll Text
    "scroll.title": "Welcome to ASI Global IT",

    // Our Service
    "our.title": "Our Services",
    "our.card_title-0": "Website Development",
    "our.card_text-0":
      "We design and develop modern, responsive, and high-performing websites tailored to your business goals.",
    "our.card_title-1": "Mobile App Development",
    "our.card_text-1":
      "From iOS to Android, we build user-friendly mobile applications that bring your ideas to life.",
    "our.card_title-2": "Artificial Intelligence Solutions",
    "our.card_text-2":
      "We implement AI-powered technologies that automate processes, analyze data, and create smarter business decisions.",
    "our.card_title-3": "CRM Systems",
    "our.card_text-3":
      "Custom CRM solutions designed to improve customer relationships, streamline sales, and boost efficiency.",
    "our.card_title-4": "ERP Systems",
    "our.card_text-4":
      "End-to-end ERP systems that integrate business operations, finance, and resources into one seamless platform.",
    "our.card_title-5": "HealthTech Solutions",
    "our.card_text-5":
      "Innovative healthcare technologies that enhance patient care, streamline operations, and support medical professionals.",

    "our.button": "Explore More IT Solutions",

    //About Us
    "about.title": "About Us",
    "about.text":
      "Our company delivers complete IT solutions worldwide, with headquarters in Uzbekistan. From custom websites, mobile applications, and artificial intelligence technologies to a wide range of other digital services, we help businesses grow and innovate in the digital age. We are not limited to a few areas of expertise — our team is capable of handling projects of different scale and complexity, whether it’s a small business solution or an enterprise-level system.",
    "about.text-2":
      "With a strong focus on quality, innovation, and international standards, we aim to provide technology that creates real value. By combining modern tools with creative approaches, we ensure every project we deliver helps our clients achieve success in today’s fast-changing digital world.",
    "about.button": "Placing An Order",

    // FAQ
    "faq.title": "FAQ",
    "faq.problem-1": "Where is your company located?",
    "faq.answer-1":
      "We are headquartered in Uzbekistan, serving clients worldwide with reliable IT solutions.",
    "faq.problem-2": "How are payments processed?",
    "faq.answer-2":
      "We follow a 50/50 payment model: 50% upfront and 50% upon project completion. Payments can be made through the method most convenient for you, including international transfers.",
    "faq.problem-3": "Do you provide support after project delivery?",
    "faq.answer-3":
      "Yes. We offer dedicated post-project support to ensure smooth operation and long-term stability of your solution.",
    "faq.problem-4": "Can changes be made during the project?",
    "faq.answer-4":
      "Yes, changes are possible during the project. However, please note that significant modifications may affect both the timeline and the cost.",
    "faq.problem-5": "Do you provide hosting, domains, and servers?",
    "faq.answer-5":
      "Yes. We can supply and manage hosting, domain registration, and server infrastructure if required.",

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
    "footer.col.title-1": "ASI Global IT Services Pvt Ltd",
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
    "nav.about": "О Нас",
    "nav.service": "Услуга",
    "nav.career": "Карьера",
    "nav.faq": "ЧЗВ",
    "nav.contec": "Контекст",
    "nav.title": "ASI Global IT",

    //Hero Section

    "hero.welcome": ["Добро пожаловать в", "ASI Global IT!"],
    "hero.title": ["Твой", "Проблемы", "Наш", "Решения"],
    "hero.text":
      "Поднимите и трансформируйте свой бизнес в цифровой формат c помощью наших инновационных идей.",
    "hero.button": "Исследовать",

    // Scroll Text
    "scroll.title": "Добро пожаловать в ASI Global IT",

    // Our Service
    "our.title": "Наши услуги",
    "our.card_title-0": "Разработка веб-сайтов",
    "our.card_text-0":
      "Мы проектируем и разрабатываем современные, адаптивные и высокопроизводительные веб-сайты, соответствующие целям вашего бизнеса.",
    "our.card_title-1": "Разработка мобильных приложений",
    "our.card_text-1":
      "От iOS до Android — мы создаем удобные мобильные приложения, которые воплощают ваши идеи в жизнь.",
    "our.card_title-2": "Artificial Intelligence Solutions",
    "our.card_text-2":
      "Мы внедряем технологии на базе искусственного интеллекта, которые автоматизируют процессы, анализируют данные и принимают более разумные бизнес-решения.",
    "our.card_title-3": "CRM-системы",
    "our.card_text-3":
      "Индивидуальные CRM-решения, разработанные для улучшения отношений с клиентами, оптимизации продаж и повышения эффективности.",
    "our.card_title-4": "ERP-системы",
    "our.card_text-4":
      "Комплексные ERP-системы, которые интегрируют бизнес-операции, финансы и ресурсы в единую целостную платформу.",
    "our.card_title-5": "Решения для здоровья",
    "our.card_text-5":
      "Инновационные технологии в здравоохранении, которые улучшают уход за пациентами, оптимизируют операции и поддерживают медицинских работников.",

    "our.button": "Узнайте больше об ИТ-решениях",

    //About Us
    "about.title": "О нас",
    "about.text":
      "Наша компания предоставляет комплексные IT-решения по всему миру, со штаб-квартирой в Узбекистане. От разработки индивидуальных веб-сайтов, мобильных приложений и технологий искусственного интеллекта до широкого спектра других цифровых услуг, мы помогаем компаниям расти и внедрять инновации в цифровую эпоху. Мы не ограничиваемся несколькими областями специализации — наша команда способна справиться с проектами любого масштаба и сложности, будь то решения для малого бизнеса или системы корпоративного уровня.",
    "about.text-2":
      "Уделяя особое внимание качеству, инновациям и международным стандартам, мы стремимся предоставлять технологии, которые создают реальную ценность. Сочетая современные инструменты с креативным подходом, мы гарантируем, что каждый наш проект поможет нашим клиентам добиться успеха в современном быстро меняющемся цифровом мире.",
    "about.button": "Размещение Заказа",

    // FAQ
    "faq.title": "ЧЗВ",
    "faq.problem-1": "Где находится ваша компания?",
    "faq.answer-1":
      "Наш главный офис находится в Узбекистане, мы предоставляем клиентам по всему миру надежные ИТ-решения.",
    "faq.problem-2": "Как обрабатываются платежи?",
    "faq.answer-2":
      "Мы работаем по схеме оплаты 50/50: 50% авансом и 50% по завершении проекта. Оплата возможна любым удобным для вас способом, включая международные переводы.",
    "faq.problem-3": "Do you provide support after project delivery?",
    "faq.answer-3":
      "Да. Мы предлагаем специализированную постпроектную поддержку, чтобы обеспечить бесперебойную работу и долгосрочную стабильность вашего решения.",
    "faq.problem-4": "Можно ли вносить изменения в ходе проекта?",
    "faq.answer-4":
      "Yes, changes are possible during the project. However, please note that significant modifications may affect both the timeline and the cost.",
    "faq.problem-5": "Предоставляете ли вы хостинг, домены и серверы?",
    "faq.answer-5":
      "Да. При необходимости мы можем предоставить и управлять хостингом, регистрацией доменов и серверной инфраструктурой.",

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
    "footer.col.title-1": "ASI Global IT Услуги Pvt Ltd",
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
