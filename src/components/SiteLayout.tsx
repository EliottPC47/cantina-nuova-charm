import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MapPin, Phone, Facebook, Clock } from "lucide-react";
import logoTransparent from "@/assets/logo-transparent.png";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/carte", label: "La Carte" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-navy-deep/95 backdrop-blur border-b border-gold/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoTransparent} alt="La Nuova Cantina" className="h-14 w-auto object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="script-title text-2xl">La Nuova</div>
              <div className="text-cream text-[0.65rem] tracking-[0.35em] uppercase">Cantina</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-cream/85 hover:text-gold text-sm tracking-[0.2em] uppercase transition-colors [&.active]:text-gold"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+33547665023"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy hover:bg-gold-soft transition-colors"
            >
              <Phone className="h-4 w-4" /> Réserver
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-cream p-2"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-navy-deep border-t border-gold/20">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-cream/85 hover:text-gold text-sm tracking-[0.2em] uppercase"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+33547665023"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy w-fit"
              >
                <Phone className="h-4 w-4" /> Réserver
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy-deep text-cream/85 border-t border-gold/20">
        <div className="h-1 w-full flex">
          <div className="flex-1 bg-italy-green" />
          <div className="flex-1 bg-cream" />
          <div className="flex-1 bg-italy-red" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <img src={logoTransparent} alt="La Nuova Cantina" className="h-16 w-auto object-contain" />
              <div>
                <div className="script-title text-3xl">La Nuova Cantina</div>
                <div className="text-cream/60 text-xs tracking-[0.3em] uppercase mt-1">Pizzeria · Trattoria</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-cream/70 max-w-sm italic">
              L'Italie authentique au cœur de Villeneuve-sur-Lot. Four à bois, produits DOP & IGP,
              recettes de famille.
            </p>
          </div>
          <div>
            <h4 className="text-gold text-sm tracking-[0.25em] uppercase mb-4">Nous trouver</h4>
            <p className="text-sm flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 34 Place Lafayette<br />47300 Villeneuve-sur-Lot</p>
            <p className="text-sm mt-3 flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href="tel:+33547665023" className="hover:text-gold">+33 5 47 66 50 23</a></p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm hover:text-gold">
              <Facebook className="h-4 w-4 text-gold" /> Facebook
            </a>
          </div>
          <div>
            <h4 className="text-gold text-sm tracking-[0.25em] uppercase mb-4">Horaires</h4>
            <ul className="text-sm space-y-1.5">
              <li className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" /> Mar – Sam</li>
              <li className="text-cream/70 pl-5">9h – 15h · 18h – 22h</li>
              <li className="flex items-center gap-2 pt-2"><Clock className="h-3.5 w-3.5 text-gold" /> Dimanche</li>
              <li className="text-cream/70 pl-5">10h – 14h · 17h – 22h</li>
              <li className="text-cream/50 pt-2">Lundi fermé</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/15">
          <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-cream/50 flex flex-wrap gap-2 justify-between">
            <span>© {new Date().getFullYear()} La Nuova Cantina — Tous droits réservés</span>
            <span className="italic">Fatto con amore 🇮🇹</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
