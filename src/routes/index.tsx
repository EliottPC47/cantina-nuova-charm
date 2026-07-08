import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Clock, ArrowRight, Flame } from "lucide-react";

const pizzaSalmone = { url: "/images/pizza-salmone.jpg" };
const pizzaBianca = { url: "/images/pizza-bianca.jpg" };
const pizzaMortadella = { url: "/images/pizza-mortadella.jpg" };
const gnocchi = { url: "/images/gnocchi.jpg" };
const paccheri = { url: "/images/paccheri.jpg" };
const fourAntipasti = { url: "/images/four-antipasti.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Nuova Cantina — Pizzeria italienne à Villeneuve-sur-Lot" },
      { name: "description", content: "Pizzeria au four à bois à Villeneuve-sur-Lot. Recettes siciliennes, produits DOP/IGP, pizze gourmet et saltimbocca par Amedeo." },
      { property: "og:title", content: "La Nuova Cantina — L'Italie authentique à Villeneuve-sur-Lot" },
      { property: "og:description", content: "Pizzeria au four à bois. Produits DOP/IGP, spécialités siciliennes." },
      { property: "og:image", content: pizzaSalmone.url },
      { property: "twitter:image", content: pizzaSalmone.url },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-navy-deep text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={pizzaSalmone.url} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 text-gold text-xs tracking-[0.35em] uppercase mb-6">
              <span className="h-px w-10 bg-gold" /> Pizzeria · Trattoria
            </div>
            <h1 className="script-title text-6xl md:text-8xl mb-3">Benvenuti</h1>
            <p className="font-display text-3xl md:text-4xl leading-tight text-cream">
              L'Italie authentique<br />au cœur de Villeneuve-sur-Lot
            </p>
            <p className="mt-6 text-cream/75 italic text-lg max-w-md">
              Four à bois, farines italiennes, tomates San Marzano DOP, mozzarella de bufflonne.
              La cucina de nonna, sans compromis.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/carte"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-navy hover:bg-gold-soft transition-colors tracking-wider uppercase"
              >
                Voir la carte <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+33547665023"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-medium text-cream hover:bg-gold/10 transition-colors tracking-wider uppercase"
              >
                <Phone className="h-4 w-4" /> Réserver
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-square rounded-full overflow-hidden ring-4 ring-gold/40 shadow-2xl">
              <img src={pizzaBianca.url} alt="Pizza bianca au four à bois" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-navy border border-gold/40 px-5 py-3 rounded-full flex items-center gap-2 text-sm">
              <Flame className="h-4 w-4 text-gold" /> <span className="italic text-cream">Cotta nel forno a legna</span>
            </div>
          </div>
        </div>
      </section>

      {/* CHEF / STORY */}
      <section className="wood-bg py-24">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <div className="text-gold text-xs tracking-[0.35em] uppercase mb-3">La casa di Amedeo</div>
            <h2 className="script-title text-6xl mb-6">La nostra storia</h2>
            <div className="gold-rule w-20 mb-8" />
            <p className="text-foreground/85 leading-relaxed">
              Amedeo a l'accent chantant de son pays, l'Italie. Ancien glacier devenu pizzaiolo par passion,
              il a fait construire son four à bois personnalisé pour reproduire la cuisson exacte de sa Sicile natale.
            </p>
            <p className="mt-5 text-foreground/85 leading-relaxed italic">
              « Chaque pizza raconte une histoire — celle d'une pâte qui repose 48 heures, d'une tomate San Marzano
              qui a mûri au soleil du Vésuve, d'une mozzarella tirée le matin même. »
            </p>
            <p className="mt-5 text-gold font-display text-xl">— Un italiano vero</p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img src={fourAntipasti.url} alt="Four à bois et antipasti" className="rounded-lg shadow-xl w-full object-cover aspect-[4/5]" />
              <div className="absolute -top-4 -right-4 h-24 w-24 border-2 border-gold rounded-full" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 border-2 border-gold/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-navy-deep text-cream py-24 relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <div className="text-gold text-xs tracking-[0.35em] uppercase mb-3">I nostri piatti</div>
            <h2 className="script-title text-6xl">Le nostre specialità</h2>
            <div className="gold-rule w-32 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: pizzaSalmone.url, label: "Salmone" },
              { src: pizzaMortadella.url, label: "Pistacchio & Mortadella" },
              { src: paccheri.url, label: "Paccheri alla Norma" },
              { src: pizzaBianca.url, label: "Pizza Bianca" },
              { src: gnocchi.url, label: "Gnocchi al ragù" },
              { src: fourAntipasti.url, label: "Antipasti" },
            ].map((img) => (
              <div key={img.label} className="group relative overflow-hidden rounded-md aspect-square">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-4 script-title text-2xl">{img.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-soft tracking-[0.25em] uppercase text-xs"
            >
              Voir la galerie complète <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INFOS PRATIQUES */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-gold text-xs tracking-[0.35em] uppercase mb-3">Informazioni</div>
            <h2 className="script-title text-6xl mb-6">Ci vediamo?</h2>
            <div className="gold-rule w-20 mb-8" />
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-navy grid place-items-center">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="font-display text-lg">34 Place Lafayette</div>
                  <div className="text-muted-foreground">47300 Villeneuve-sur-Lot</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-navy grid place-items-center">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="font-display text-lg">
                    <a href="tel:+33547665023" className="hover:text-gold">+33 5 47 66 50 23</a>
                  </div>
                  <div className="text-muted-foreground italic">Réservation par téléphone</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-navy grid place-items-center">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="font-display text-lg">Mardi – Samedi</div>
                  <div className="text-muted-foreground">9h – 15h &nbsp;·&nbsp; 18h – 22h</div>
                  <div className="font-display text-lg mt-2">Dimanche</div>
                  <div className="text-muted-foreground">10h – 14h &nbsp;·&nbsp; 17h – 22h</div>
                  <div className="text-muted-foreground/70 text-sm mt-1 italic">Lundi fermé</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden ring-1 ring-border shadow-lg aspect-square md:aspect-auto md:h-full min-h-[420px]">
            <iframe
              title="La Nuova Cantina - Google Maps"
              src="https://www.google.com/maps?q=La+Nuova+Cantina,+34+Place+Lafayette,+47300+Villeneuve-sur-Lot&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
