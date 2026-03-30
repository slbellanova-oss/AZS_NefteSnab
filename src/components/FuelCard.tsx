"use client";

interface FuelCardProps {
  product: {
    id: string;
    name: string;
    fullName: string;
    description: string;
    icon: React.ReactNode;
    specs: { label: string; value: string }[];
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function FuelCard({ product, isExpanded, onToggle }: FuelCardProps) {
  return (
    <div className="h-full">
      <div className="bg-charcoal-light rounded-2xl p-8 border border-white/5 hover:border-amber/40 transition-colors duration-300 h-full flex flex-col">
        <div className="mb-6 text-amber">
          {product.icon}
        </div>

        <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">
          {product.name}
        </h3>
        <p className="text-sm text-slate-light mb-4 font-medium">{product.fullName}</p>

        <p className="text-slate-light mb-6 leading-relaxed text-sm flex-grow">
          {product.description}
        </p>

        <div className="space-y-2 mb-6">
          {product.specs.map((spec, idx) => (
            <div key={idx} className="flex justify-between items-center text-sm">
              <span className="text-slate-light font-medium">{spec.label}:</span>
              <span className="text-white font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onToggle}
          className="w-full bg-white/5 hover:bg-amber text-amber hover:text-charcoal border border-white/10 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Технические характеристики
        </button>
      </div>
    </div>
  );
}
