"use client";

import PulsingDot from "./PulsingDot";

export default function Quality() {
  const certificates = [
    {
      title: "Лицензия на хранение",
      description: "Разрешение на хранение нефтепродуктов",
    },
    {
      title: "Лицензия на перевозку",
      description: "Разрешение на транспортировку опасных грузов",
    },
    {
      title: "Паспорт качества",
      description: "Сертификат на каждую партию топлива",
    },
    {
      title: "ГОСТ стандарты",
      description: "Соответствие государственным стандартам",
    },
  ];

  return (
    <section id="quality" className="relative py-20 md:py-32 bg-white overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate/20">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Трясет колбу.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/30 via-transparent to-amber/20" />
              
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border border-slate/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate">Сертифицировано</div>
                    <div className="text-lg font-bold text-charcoal">ГОСТ РФ</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-amber/10 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-metallic backdrop-blur-md rounded-lg border border-slate/20">
              <PulsingDot />
              <span className="text-amber font-semibold text-sm uppercase tracking-wider">Гарантия качества</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight">Контроль качества</h2>
            <p className="text-xl text-slate mb-10 leading-relaxed font-light">
              Каждая партия топлива проходит лабораторный контроль. Мы работаем
              только с проверенными поставщиками и гарантируем соответствие
              ГОСТ.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-amber/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-metallic/80 backdrop-blur-sm p-6 rounded-xl border border-slate/20 hover:border-amber/40 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 bg-amber/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-amber/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-amber"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-charcoal text-lg group-hover:text-amber transition-colors">{cert.title}</h3>
                    </div>
                    <p className="text-sm text-slate leading-relaxed ml-13">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber/10 to-charcoal/10 rounded-xl border border-amber/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Гарантия качества</h4>
                  <p className="text-sm text-slate">Возврат или замена партии при несоответствии заявленным характеристикам</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
