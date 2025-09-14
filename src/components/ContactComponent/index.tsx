"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import toast from "react-hot-toast";

function ConcentricLoader() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400">
        <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400"></div>
      </div>
    </div>
  );
}

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "contact") {
      // faqat raqam qoldirish
      newValue = value.replace(/[^0-9+]/g, "");
    }

    if (name === "email") {
      // bo'sh qoldirilsa bo'ladi, lekin format noto‘g‘ri bo‘lsa yozib bo‘lmaydi
      // faqat email formatidagi belgilar qoldiriladi
      newValue = value.replace(/[^a-zA-Z0-9@._-]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const { t } = useLanguage();

  const handleSubmit = async () => {
    // Form validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.contact.trim()) {
      toast.error("Please enter your contact number");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    try {
      setLoading(true);
      await fetch(
        "https://script.google.com/macros/s/AKfycbz8GH5EYRLVRHHfCuSkxcxk1d62rbn9QYcqxVEtbOLBXpsjhAhhaPehvaSd4j_bm3vGZw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      toast.success("Successfully Completed");

      // Form reset
      setFormData({
        name: "",
        contact: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error, "fetch error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-black via-black to-green-950 py-16 px-4"
    >
      <div className="absolute z-0 top-20 left-20 w-54 h-54 rounded-full flex items-center justify-center animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
      </div>
      <div className="absolute z-0 bottom-20 right-20 w-54 h-54 rounded-full flex items-center justify-center animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-green-700/50 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
            {t("contact.title")}
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 peer"
                    placeholder="Name"
                    required
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800">
                    {t("conteat.name")}
                  </label>
                </div>

                {/* Contact Number Field */}
                <div className="relative">
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 peer"
                    placeholder="Contact Number"
                    required
                    inputMode="numeric"
                    maxLength={12}
                    id="number"
                  />
                  <label htmlFor="number" className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800">
                    {t("conteat.phone")}
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 peer"
                    placeholder="Email"
                    required
                    id="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800"
                  >
                    {t("conteat.email")}
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 peer resize-none"
                    placeholder="Your Message"
                    required
                    id="message"
                  />
                  <label htmlFor="message" className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800">
                    {t("conteat.message")}
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-8">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    {t("contact.button")}
                  </button>
                  {loading && <ConcentricLoader />}
                </div>
              </div>
            </div>

            {/* Map/Contact Info Section */}
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full min-h-[400px] relative overflow-hidden">
                {/* Decorative map placeholder */}
                {/* <div className="absolute inset-0 opacity-20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22860.887504111746!2d69.26042916800169!3d41.32687811275865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b477ac0b7cf%3A0x4bca93d14dec7148!2sEmbassy%20of%20the%20Federal%20Republic%20of%20Germany!5e0!3m2!1sen!2s!4v1757695943031!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[450px] rounded-xl shadow-lg"
                  />
                </div> */}

                {/* Contact Information Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h3 className="text-white text-2xl font-bold mb-6">
                    {t("contact.info.title")}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {t("contact.info.address")}
                        </p>
                        <p className="text-sm text-slate-300">
                          123 Business St, City, Country
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {" "}
                          {t("contact.info.phone")}{" "}
                        </p>
                        <p className="text-sm text-slate-300">
                          +49 176 61084330
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {" "}
                          {t("contact.info.email")}
                        </p>
                        <p className="text-sm text-slate-300">
                          asiglobalit@sgafurbekov.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
