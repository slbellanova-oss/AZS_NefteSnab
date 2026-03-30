"use client";

import PulsingDot from "./PulsingDot";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Оптовые поставки",
      description: "Прямые контракты с нефтеперерабатывающими заводами. Стабильные объемы и фиксированные цены.",
    },
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      title: "Логистика до склада",
      description: "Доставка собственным автопарком. 20 цистерн, контроль на каждом этапе перевозки.",
    },
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Сертификация",
      description: "Паспорт качества на каждую партию. Все лицензии и разрешительные документы.",
    },
    {
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Розничные продажи",
      description: "Сеть собственных АЗС. Контроль качества топлива на каждой станции.",
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-metallic overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white/60 backdrop-blur-md rounded-lg border border-slate/20">
            <PulsingDot />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Что мы предлагаем</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight">Наши услуги</h2>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed font-light">
            Полный цикл поставок нефтепродуктов — от производителя до вашего склада
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber/10 to-amber/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-slate/20 hover:border-amber/20 shadow-lg hover:shadow-xl h-full transition-all duration-500 translate-y-0 group-hover:-translate-y-2 flex flex-col"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <div className="mb-6 text-amber transition-all duration-500 group-hover:scale-105">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-3 transition-colors duration-500 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate leading-relaxed text-sm flex-grow">{service.description}</p>

                <div className="mt-6 flex items-center text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:translate-x-2">
                  <span className="text-sm font-bold mr-2 uppercase tracking-wider">Подробнее</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
