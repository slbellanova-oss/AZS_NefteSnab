import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/ЛоготипNew.png"
        alt="АЗС-НефтеСнаб"
        width={45}
        height={30}
        className="h-auto w-auto"
        priority
      />
      <span className="text-base md:text-lg font-bold text-white whitespace-nowrap tracking-tight">
        АЗС-НефтеСнаб
      </span>
    </div>
  );
}
