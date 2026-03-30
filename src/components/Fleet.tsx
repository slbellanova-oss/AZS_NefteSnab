"use client";

import PulsingDot from "./PulsingDot";

export default function Fleet() {
  const stats = [
    { value: "20+", label: "Топливозаправщиков" },
    { value: "40+", label: "Тонн грузоподъемность" },
    { value: "100%", label: "Своевременная доставка" },
    { value: "GPS", label: "Мониторинг 24/7" },
  ];

  const features = ["Современный парк", "GPS-контроль", "Сертифицированные водители"];

  return (
    <section id="fleet" className="relative py-20 md:py-32 bg-metallic overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white/60 backdrop-blur-md rounded-lg border border-slate/20">
              <PulsingDot />
              <span className="text-amber font-semibold text-sm uppercase tracking-wider">Наш автопарк</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight">Собственный автопарк</h2>
            <p className="text-xl text-slate mb-8 leading-relaxed font-light">
              20 современных топливозаправщиков с GPS-мониторингом. Каждая
              цистерна проходит регулярное техническое обслуживание и
              сертификацию.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-amber/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate/20 hover:border-amber/40 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold text-amber mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-slate font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate/20">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Камаз 2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/30 via-transparent to-amber/10" />
            </div>
            
            <div className="group absolute -bottom-6 -right-6 bg-gradient-to-br from-amber to-amber-dark text-white px-8 py-6 rounded-xl shadow-2xl border-2 border-metallic group-hover:scale-105 transition-transform">
              <div className="text-xs opacity-90 mb-1 uppercase tracking-wider font-semibold">Доставка по РФ</div>
              <div className="text-3xl font-bold">24 часа</div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-amber/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
