"use client"
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Bu yerda form submission logikasini qo'shing
    alert("Message sent successfully!");

    // Form ni tozalash
    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      message: "",
    });
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
            Get In Touch
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
                  />
                  <label className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800">
                    Name
                  </label>
                </div>

                {/* Contact Number Field */}
                <div className="relative">
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 peer"
                    placeholder="Contact Number"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800">
                    Contact Number
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
                  />
                  <label className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800">
                    Email
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
                  />
                  <label className="absolute left-4 -top-2.5 bg-slate-800 px-2 text-sm text-teal-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400 peer-focus:bg-slate-800">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  SUBMIT
                </button>
              </div>
            </div>

            {/* Map/Contact Info Section */}
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full min-h-[400px] relative overflow-hidden">
                {/* Decorative map placeholder */}
                <div className="absolute inset-0 opacity-20">
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
                </div>

                {/* Contact Information Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h3 className="text-white text-2xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
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
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-slate-300">
                          +998 (99) 123-12-12
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-slate-300">
                          contact@company.com
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
