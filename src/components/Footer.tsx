import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(217, 119, 6, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217, 119, 6, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Logo className="h-16 w-auto" />
              </div>
              <p className="text-slate-light max-w-md mb-6 leading-relaxed font-light">
                Прямые поставки нефтепродуктов от производителя. Собственный
                автопарк, лицензии, сертификаты качества на каждую партию.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-amber rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Услуги</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-slate-light hover:text-amber transition-colors flex items-center group font-medium">
                    <svg className="w-4 h-4 mr-2 text-amber opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    Оптовые поставки
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-light hover:text-amber transition-colors flex items-center group font-medium">
                    <svg className="w-4 h-4 mr-2 text-amber opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    Логистика
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-slate-light hover:text-amber transition-colors flex items-center group font-medium">
                    <svg className="w-4 h-4 mr-2 text-amber opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    Продукция
                  </a>
                </li>
                <li>
                  <a href="#quality" className="text-slate-light hover:text-amber transition-colors flex items-center group font-medium">
                    <svg className="w-4 h-4 mr-2 text-amber opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    Сертификация
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">Контакты</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+78001234567"
                    className="text-slate-light hover:text-amber transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 bg-amber/20 rounded-lg flex items-center justify-center group-hover:bg-amber transition-colors border border-amber/30">
                      <svg className="w-4 h-4 text-amber group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white">8 (800) 123-45-67</div>
                      <div className="text-xs text-slate-light/80">Бесплатно по России</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@azs-neftesnab.ru"
                    className="text-slate-light hover:text-amber transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 bg-amber/20 rounded-lg flex items-center justify-center group-hover:bg-amber transition-colors border border-amber/30">
                      <svg className="w-4 h-4 text-amber group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="font-bold text-white">info@azs-neftesnab.ru</div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-light">
                  <div className="w-8 h-8 bg-amber/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber/30">
                    <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">г. Москва,</div>
                    <div className="text-white font-medium">ул. Примерная, д. 1</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-light/80 text-sm font-medium">
                © {currentYear} ООО «АЗС-НефтеСнаб». Все права защищены.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <a
                  href="#"
                  className="text-slate-light/80 hover:text-amber transition-colors text-sm font-medium"
                >
                  Политика конфиденциальности
                </a>
                <a
                  href="#"
                  className="text-slate-light/80 hover:text-amber transition-colors text-sm font-medium"
                >
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
