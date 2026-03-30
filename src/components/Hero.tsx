"use client";

import Image from "next/image";
import PulsingDot from "./PulsingDot";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const [tankersCount, setTankersCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tankersInterval = setInterval(() => {
      setTankersCount(prev => {
        if (prev < 20) return prev + 1;
        clearInterval(tankersInterval);
        return prev;
      });
    }, 100);

    const yearsInterval = setInterval(() => {
      setYearsCount(prev => {
        if (prev < 24) return prev + 1;
        clearInterval(yearsInterval);
        return prev;
      });
    }, 100);

    return () => {
      clearInterval(tankersInterval);
      clearInterval(yearsInterval);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 md:pt-40 pb-20 md:pb-32 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(241, 245, 249, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241, 245, 249, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(241, 245, 249, 0.1) 35px, rgba(241, 245, 249, 0.1) 36px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
              <PulsingDot />
              <span className="text-metallic text-sm font-semibold tracking-wide uppercase">Работаем с 2002 года</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Надежные поставки{" "}
              <span className="relative inline-block">
                <span className="text-amber">нефтепродуктов</span>
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  height="8" 
                  viewBox="0 0 300 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 6C50 3 100 2 150 4C200 6 250 7 298 5" 
                    stroke="#D97706" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-slate-light">с 2002 года</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-light mb-10 leading-relaxed max-w-xl font-light">
              Прямые поставки от производителя. Собственный автопарк из 20+ цистерн. 
              Сертификат качества на каждую партию.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-amber/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-amber/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-amber mb-1">{mounted ? tankersCount : 20}+</div>
                  <div className="text-xs md:text-sm text-slate-light font-medium uppercase tracking-wider">Цистерн</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-amber/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-amber/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-amber mb-1">24ч</div>
                  <div className="text-xs md:text-sm text-slate-light font-medium uppercase tracking-wider">Доставка</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-amber/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-amber/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-amber mb-1">100%</div>
                  <div className="text-xs md:text-sm text-slate-light font-medium uppercase tracking-wider">Качество</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="group relative px-8 py-4 bg-amber hover:bg-amber-dark text-white font-bold text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber/50 hover:shadow-2xl text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Рассчитать стоимость
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
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-slate/40 hover:border-amber rounded-lg font-bold text-base text-metallic hover:text-amber hover:bg-amber/5 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Наши услуги
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Камаз 1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/60 via-charcoal/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-2xl border-2 border-charcoal">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs mb-1 uppercase tracking-wider font-semibold" style={{ color: '#0c1831' }}>Опыт работы</div>
                  <div className="text-2xl font-bold" style={{ color: '#0c1831' }}>{mounted ? yearsCount : 24}+ года</div>
                </div>
                <div>
                  <div className="text-xs mb-1 uppercase tracking-wider font-semibold" style={{ color: '#0c1831' }}>Сертификация</div>
                  <div className="text-2xl font-bold text-amber">ГОСТ РФ</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-amber text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-charcoal">
              <div className="text-xs opacity-90 mb-1 uppercase tracking-wider font-semibold">Доставка по РФ</div>
              <div className="text-2xl font-bold">24 часа</div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-amber/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
