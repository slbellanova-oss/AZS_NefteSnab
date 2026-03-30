"use client";

import { useState } from "react";
import React from "react";
import FuelCard from "./FuelCard";
import PulsingDot from "./PulsingDot";

interface FuelProduct {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: React.ReactNode;
  specs: {
    label: string;
    value: string;
  }[];
  technicalData: {
    parameter: string;
    value: string;
    unit: string;
  }[];
}

export default function FuelCatalog() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const products: FuelProduct[] = [
    {
      id: "ai-92",
      name: "АИ-92",
      fullName: "Бензин автомобильный АИ-92",
      description: "Автомобильный бензин премиум класса для современных двигателей",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      specs: [
        { label: "ГОСТ", value: "32513-2013" },
        { label: "Класс", value: "К5" },
        { label: "Октановое число", value: "92" },
      ],
      technicalData: [
        { parameter: "Октановое число (исследовательский метод)", value: "92.0", unit: "мин" },
        { parameter: "Октановое число (моторный метод)", value: "83.0", unit: "мин" },
        { parameter: "Массовая доля серы", value: "10", unit: "мг/кг, макс" },
        { parameter: "Концентрация свинца", value: "5", unit: "мг/дм³, макс" },
        { parameter: "Плотность при 15°C", value: "725-780", unit: "кг/м³" },
        { parameter: "Давление насыщенных паров", value: "45-80", unit: "кПа" },
      ],
    },
    {
      id: "ai-95",
      name: "АИ-95",
      fullName: "Бензин автомобильный АИ-95",
      description: "Высокооктановый бензин для двигателей с высокой степенью сжатия",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      specs: [
        { label: "ГОСТ", value: "32513-2013" },
        { label: "Класс", value: "К5" },
        { label: "Октановое число", value: "95" },
      ],
      technicalData: [
        { parameter: "Октановое число (исследовательский метод)", value: "95.0", unit: "мин" },
        { parameter: "Октановое число (моторный метод)", value: "85.0", unit: "мин" },
        { parameter: "Массовая доля серы", value: "10", unit: "мг/кг, макс" },
        { parameter: "Концентрация свинца", value: "5", unit: "мг/дм³, макс" },
        { parameter: "Плотность при 15°C", value: "725-780", unit: "кг/м³" },
        { parameter: "Давление насыщенных паров", value: "45-80", unit: "кПа" },
      ],
    },
    {
      id: "dt",
      name: "ДТ",
      fullName: "Дизельное топливо",
      description: "Дизельное топливо для грузового и специального транспорта",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      specs: [
        { label: "ГОСТ", value: "32511-2013" },
        { label: "Класс", value: "Евро-5" },
        { label: "Цетановое число", value: "51" },
      ],
      technicalData: [
        { parameter: "Цетановое число", value: "51.0", unit: "мин" },
        { parameter: "Массовая доля серы", value: "10", unit: "мг/кг, макс" },
        { parameter: "Плотность при 15°C", value: "820-845", unit: "кг/м³" },
        { parameter: "Фракционный состав: 95% перегоняется при температуре", value: "360", unit: "°C, макс" },
        { parameter: "Температура вспышки в закрытом тигле", value: "55", unit: "°C, мин" },
        { parameter: "Кинематическая вязкость при 40°C", value: "2.0-4.5", unit: "мм²/с" },
      ],
    },
    {
      id: "ai-98",
      name: "АИ-98",
      fullName: "Бензин автомобильный АИ-98",
      description: "Премиальный бензин для спортивных и высокофорсированных двигателей",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      specs: [
        { label: "ГОСТ", value: "32513-2013" },
        { label: "Класс", value: "К5" },
        { label: "Октановое число", value: "98" },
      ],
      technicalData: [
        { parameter: "Октановое число (исследовательский метод)", value: "98.0", unit: "мин" },
        { parameter: "Октановое число (моторный метод)", value: "88.0", unit: "мин" },
        { parameter: "Массовая доля серы", value: "10", unit: "мг/кг, макс" },
        { parameter: "Концентрация свинца", value: "5", unit: "мг/дм³, макс" },
        { parameter: "Плотность при 15°C", value: "725-780", unit: "кг/м³" },
        { parameter: "Давление насыщенных паров", value: "45-80", unit: "кПа" },
      ],
    },
  ];

  const toggleSpecs = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const expandedData = products.find(p => p.id === expandedProduct);

  return (
    <section id="products" className="relative py-20 md:py-32 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
            <PulsingDot />
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">Каталог продукции</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Нефтепродукты</h2>
          <p className="text-xl text-slate-light max-w-3xl mx-auto leading-relaxed font-light">
            Полный ассортимент топлива высшего качества с сертификатами соответствия ГОСТ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <FuelCard
              key={product.id}
              product={product}
              index={index}
              isExpanded={expandedProduct === product.id}
              onToggle={() => toggleSpecs(product.id)}
            />
          ))}
        </div>

        {expandedProduct && expandedData && (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-amber/10 border-b border-white/10 px-8 py-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Технические характеристики: {expandedData.name}
              </h3>
              <p className="text-slate-light mt-2">{expandedData.fullName}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-8 py-4 text-sm font-bold text-slate-light uppercase tracking-wider">Параметр</th>
                    <th className="text-right px-8 py-4 text-sm font-bold text-slate-light uppercase tracking-wider">Значение</th>
                    <th className="text-right px-8 py-4 text-sm font-bold text-slate-light uppercase tracking-wider">Единица измерения</th>
                  </tr>
                </thead>
                <tbody>
                  {expandedData.technicalData.map((data, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200">
                      <td className="px-8 py-4 text-white font-medium">{data.parameter}</td>
                      <td className="px-8 py-4 text-right text-amber font-bold">{data.value}</td>
                      <td className="px-8 py-4 text-right text-slate-light">{data.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white/5 border-t border-white/10 px-8 py-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-slate-light leading-relaxed">
                  Все показатели соответствуют требованиям ГОСТ. Паспорт качества предоставляется на каждую партию.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "100% качество",
              description: "Сертификаты на каждую партию"
            },
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Быстрая доставка",
              description: "От 24 часов по всей России"
            },
            {
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Выгодные цены",
              description: "Прямые поставки от НПЗ"
            }
          ].map((card, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-amber/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
              <p className="text-slate-light text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
