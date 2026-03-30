import "./globals.css";
import type { Metadata, Viewport } from "next";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "АЗС-НефтеСнаб | Поставка нефтепродуктов без посредников",
  description:
    "Прямые поставки топлива от производителя. Собственный автопарк, лицензии, сертификаты качества на каждую партию.",
  keywords: "топливо, нефтепродукты, АЗС, поставка топлива, оптовая продажа топлива",
  openGraph: {
    title: "АЗС-НефтеСнаб | Поставка нефтепродуктов без посредников",
    description:
      "Прямые поставки топлива от производителя. Собственный автопарк, лицензии, сертификаты качества на каждую партию.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/ЛоготипNew.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/ЛоготипNew.png" />
      </head>
      <body className="bg-white text-gray-900">
      <Preloader />
      {children}
    </body>
    </html>
  );
}