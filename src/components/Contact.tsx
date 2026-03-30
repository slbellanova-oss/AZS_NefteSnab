"use client";

import { useState } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import PulsingDot from "./PulsingDot";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const submitButton = useMagnetic({ strength: 0.3, radius: 50 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Телефон",
      value: "8 (800) 123-45-67",
      subtitle: "Бесплатно по России, 24/7"
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Email",
      value: "info@azs-neftesnab.ru",
      subtitle: "Ответим в течение часа"
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Адрес",
      value: "г. Москва, ул. Примерная, д. 1",
      subtitle: "Офис работает Пн-Пт 9:00-18:00"
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-metallic overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white/60 backdrop-blur-md rounded-lg border border-slate/20">
              <PulsingDot />
              <span className="text-amber font-semibold text-sm uppercase tracking-wider">Свяжитесь с нами</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight">Оставьте заявку</h2>
            <p className="text-xl text-slate mb-12 leading-relaxed font-light">
              Рассчитаем стоимость поставки в течение часа. Работаем с юридическими лицами по всей России.
            </p>

            <div className="space-y-8">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber to-amber-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={contact.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-2 text-lg">{contact.title}</h3>
                    <a
                      href={contact.title === "Телефон" ? `tel:+78001234567` : contact.title === "Email" ? `mailto:info@azs-neftesnab.ru` : undefined}
                      className="text-amber hover:text-amber-dark text-xl font-bold transition-colors"
                    >
                      {contact.value}
                    </a>
                    <p className="text-sm text-slate mt-1 font-medium">{contact.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl border border-slate/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider"
                  >
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-slate/30 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all text-charcoal placeholder:text-slate/50 font-medium"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider"
                  >
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-slate/30 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all text-charcoal placeholder:text-slate/50 font-medium"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border-2 border-slate/30 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all text-charcoal placeholder:text-slate/50 font-medium"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-charcoal mb-2 uppercase tracking-wider"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-white border-2 border-slate/30 rounded-lg focus:ring-2 focus:ring-amber focus:border-amber transition-all resize-none text-charcoal placeholder:text-slate/50 font-medium"
                    placeholder="Опишите вашу потребность в нефтепродуктах..."
                  />
                </div>

                <button 
                  type="submit" 
                  ref={submitButton.ref as any}
                  {...submitButton.handlers}
                  className="group relative w-full bg-amber hover:bg-amber-dark text-white px-8 py-5 rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 overflow-hidden"
                  style={submitButton.style}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Отправить заявку
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-light to-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <p className="text-xs text-slate text-center leading-relaxed font-medium">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#" className="text-amber hover:underline font-bold">политикой обработки персональных данных</a>
                </p>
              </form>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber/20 to-transparent rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
