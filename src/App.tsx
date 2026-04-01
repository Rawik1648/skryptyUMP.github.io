/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingCart, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Globe, 
  Mail,
  Plus
} from "lucide-react";

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
    <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-on-surface tracking-tighter font-headline">
        SkryptyUMP
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <a className="text-primary font-bold border-b-2 border-primary pb-1 font-headline tracking-tight" href="#">Home</a>
        <a className="text-on-surface opacity-80 hover:opacity-100 hover:text-tertiary transition-all font-headline tracking-tight" href="#products">Skrypty</a>
        <a className="text-on-surface opacity-80 hover:opacity-100 hover:text-tertiary transition-all font-headline tracking-tight" href="#how-it-works">Jak to działa</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors flex items-center justify-center">
          <ShoppingCart className="w-6 h-6 text-primary" />
        </button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-sm font-bold tracking-widest uppercase">
          Edukacja Premium
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1]">
          Opanuj Materiał ze <span className="text-primary">SkryptyUMP</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
          Twoje sprawdzone pomoce naukowe w formacie PDF. Szybko, prosto i bezpiecznie. Zaprojektowane dla studentów ceniących czas.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-tertiary/10 active:scale-95 duration-200">
          Przeglądaj Skrypty
        </button>
        <button className="bg-surface-container-high text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-all active:scale-95 duration-200">
          Dowiedz się więcej
        </button>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative group"
    >
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary-container to-secondary-container rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <img 
          alt="Modern minimalist workspace" 
          className="w-full h-[500px] object-cover rounded-xl" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEuQ41ft6bOZJlbcwDFXRHzcfA_gr_HVftU5j8xJuHZbfjceb-f9LYah30WEwzEsjZWvwfr_nuXojy-Tjuj_GklHY7yDjWS68j4-TetfYuX4sZtU7gvTeUcdrhGLikCw91I-nmlG-PVY91GLvbjQyO5R8mE-ingknmktqJahcG8pFevDGZFTY0kX4xYALIJw2v8ud9xywVO6x9cL_6fJi_EiyW7eQR0rTVeAHm_MxPfAIxkyggjavsgPRUiaIg6cRPBfibuz8rCoM"
          referrerPolicy="no-referrer"
        />
      </div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl max-w-[240px] hidden lg:block border border-outline-variant/10"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <p className="text-sm font-bold">100% Aktualne</p>
        </div>
        <p className="text-xs text-on-surface-variant">Nasze skrypty są aktualizowane na bieżąco według najnowszych sylabusów.</p>
      </motion.div>
    </motion.div>
  </section>
);

const Benefits = () => (
  <section className="bg-surface-container-low py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: BookOpen, title: "Aktualna Wiedza", desc: "Materiały opracowane na podstawie najnowszych wymagań akademickich i egzaminacyjnych.", color: "bg-primary-container/30", iconColor: "text-primary" },
          { icon: FileText, title: "Format PDF", desc: "Czytaj na dowolnym urządzeniu - tablecie, smartfonie czy laptopie. Pełna mobilność nauki.", color: "bg-secondary-container/50", iconColor: "text-secondary" },
          { icon: Zap, title: "Automatyczna Wysyłka", desc: "Nie czekaj. Od razu po dokonaniu płatności otrzymasz link do pobrania pliku na swój e-mail.", color: "bg-tertiary-container/50", iconColor: "text-tertiary" },
        ].map((benefit, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 rounded-xl bg-surface-container-lowest transition-transform duration-300"
          >
            <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-6`}>
              <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => (
  <section className="py-24 max-w-7xl mx-auto px-6" id="products">
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Popularne Skrypty</h2>
        <p className="text-on-surface-variant">Najczęściej wybierane materiały przez studentów w tym miesiącu.</p>
      </div>
      <div className="hidden md:flex gap-2">
        <button className="p-3 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Skrypt: Biologia Komórki", category: "Medycyna", price: "39,00 PLN", desc: "Kompletne opracowanie zagadnień z zakresu cytologii, genetyki molekularnej i cyklu komórkowego.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgFex6eIaMzULd55CRHp4ygQ60GZkBNA8lbM1fj4pecIudETkYX58u-gXLy7giP-7arH6ivrxXat6tn-hRUEA44dDgZvZQ2O58zacB6qTz5TamQO78phaCYUu_LHFU8yIYTwfTqMpg7RQb3zZANE-Hg_jkqVkFgIl85wvqnmBFNAPgOUJa9H1yqx3soRik7CdZ9xk8Dx7Ve5sSjHTS1GRa_xdVWcCVxS0VySbU5csx5RXtZj00h9RWmUC2C56U1Xj0fZJaV8gHDJI" },
        { title: "Skrypt: Anatomia Prawidłowa", category: "Fizjoterapia", price: "45,00 PLN", desc: "Szczegółowe opisy układu ruchu, krążenia i nerwowego z autorskimi mnemotechnikami.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApvwixA5G03GednkmCX39YnfDYLmdd9OqBw3yMYHIAfQ4t-mszST2Fbjs1JMlRmB3-Gd1W_3oKPxB7_TyMqAxx68GkQyU7jzxG4DTewstQ-b86T6ijK5-eHcxkhSTIjwREMzdK6qWbf2Zbk4d5in0s_vaMw8JK4MQv1psfQTNbw8K9kbkOCnCqFA2eVo6CrS-j1C3RsIcoPKylsX4y3YbVk6HF8WzYyKWuN0lq8SSWkTifrWIFzqZz32fhgp-1eN_faMApfMSHKus" },
        { title: "Skrypt: Farmakologia Kliniczna", category: "Farmacja", price: "42,00 PLN", desc: "Najważniejsze grupy leków, mechanizmy działania i interakcje w pigułce.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhTkOjL6IueeJfSGKtrjLxKmIRy8vA2f6eK_z4Gl5RI1Yhc5Yx_N96929OUV07hLWuFPMzx7hse4gI6DogFhfggFLuGmt_1m23zGdNX_eiJV10xcFUjCT5dAxI-g6J3REvHHfuYbnrRrGgkzHeF_4kjwucDgTb0VkwjrO9feplQ4793moCzX95o79QFZs5ha0iWu-YdEe8PgSs34LPM94KyRlgtjzqaTkisyUD198j8kTKViFiEjDfymqtljvHQKh0iIV-NyiNgoc" },
      ].map((product, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -4 }}
          className="group bg-surface-container-high rounded-xl overflow-hidden flex flex-col"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              alt={product.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src={product.img}
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">
              {product.category}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h4 className="text-xl font-bold mb-2">{product.title}</h4>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">{product.desc}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-2xl font-extrabold text-primary">{product.price}</span>
              <button className="bg-secondary-container text-on-secondary-container p-3 rounded-xl hover:bg-secondary hover:text-on-secondary transition-all active:scale-90">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="mt-16 flex justify-center">
      <button className="bg-tertiary text-on-tertiary px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-tertiary/10">
        Zobacz Pełną Ofertę
      </button>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="bg-surface-container py-24" id="how-it-works">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">Jak to działa?</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
        {[
          { step: 1, title: "Wybierz skrypt", desc: "Przejrzyj naszą bazę i dodaj do koszyka materiały, których potrzebujesz.", color: "border-primary/20", textColor: "text-primary" },
          { step: 2, title: "Opłać bezpiecznie", desc: "Skorzystaj z szybkich płatności online. Twoje dane są w pełni chronione.", color: "border-secondary/20", textColor: "text-secondary" },
          { step: 3, title: "Odbierz plik", desc: "Odbierz plik PDF i kod dostępu bezpośrednio na swój adres e-mail.", color: "border-tertiary/20", textColor: "text-tertiary" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center max-w-[280px] z-10">
            <div className={`w-20 h-20 rounded-full bg-surface-container-lowest border-4 ${item.color} flex items-center justify-center text-3xl font-black ${item.textColor} mb-6 shadow-sm`}>
              {item.step}
            </div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-on-surface-variant text-sm">{item.desc}</p>
          </div>
        ))}
        <div className="absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-outline-variant/30 hidden md:block -z-0"></div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
    <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">Co mówią studenci</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: "Anna K.", role: "Kierunek Lekarski, II rok", quote: "Dzięki tym skryptom zaliczyłam anatomię w pierwszym terminie! Bardzo przejrzyste i konkretne opracowanie bez zbędnego lania wody.", color: "text-secondary" },
        { name: "Marek J.", role: "Farmacja, III rok", quote: "System automatycznej wysyłki to złoto. Potrzebowałem materiałów na cito o 2 w nocy i dostałem je w 30 sekund. Uratowaliście mi życie!", color: "text-primary" },
        { name: "Karolina W.", role: "Analityka Medyczna, I rok", quote: "Wysoka jakość PDF-ów, świetnie wyglądają na iPadzie. Wygodne nawigowanie po rozdziałach to ogromny plus przy tej ilości stron.", color: "text-tertiary" },
      ].map((t, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 1.02 }}
          className="bg-surface-container-low p-8 rounded-xl relative"
        >
          <Quote className={`w-12 h-12 ${t.color} opacity-20 absolute top-4 left-4`} />
          <p className="relative text-on-surface italic mb-6 mt-4">"{t.quote}"</p>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${i === 0 ? 'bg-primary-container' : i === 1 ? 'bg-secondary-container' : 'bg-tertiary-container'}`}></div>
            <div>
              <p className="font-bold text-sm">{t.name}</p>
              <p className="text-xs text-on-surface-variant">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Newsletter = () => (
  <section className="max-w-5xl mx-auto px-6 mb-24">
    <div className="bg-primary text-on-primary p-12 rounded-[2rem] text-center space-y-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight relative z-10">Zacznij naukę mądrzej</h2>
      <p className="text-primary-container max-w-xl mx-auto text-lg relative z-10">Dołącz do tysięcy zadowolonych studentów i zdaj sesję z uśmiechem na ustach.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <input 
          className="px-6 py-4 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/30 border-none sm:w-80" 
          placeholder="Twój e-mail" 
          type="email"
        />
        <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:bg-white transition-all">
          Zapisz się
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-low w-full py-12 px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="font-headline font-bold text-on-surface text-xl">SkryptyUMP</div>
        <p className="text-sm tracking-wide text-on-surface/70">© 2026 SkryptyUMP. Wszelkie prawa zastrzeżone.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {["Kontakt", "Regulamin", "Polityka Prywatności", "Dostawa"].map((link) => (
          <a key={link} className="text-sm tracking-wide text-on-surface/70 hover:text-tertiary transition-colors" href="#">{link}</a>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container cursor-pointer transition-colors">
          <Globe className="w-5 h-5 text-on-surface" />
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container cursor-pointer transition-colors">
          <Mail className="w-5 h-5 text-on-surface" />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Benefits />
        <Products />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
