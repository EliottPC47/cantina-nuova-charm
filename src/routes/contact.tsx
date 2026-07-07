import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Réservation — La Nuova Cantina" },
      { name: "description", content: "34 Place Lafayette, 47300 Villeneuve-sur-Lot. Réservation au +33 5 47 66 50 23. Horaires d'ouverture." },
      { property: "og:title", content: "Contact — La Nuova Cantina" },
      { property: "og:description", content: "Adresse, horaires et réservation par téléphone." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="bg-navy-deep text-cream py-20">
        <div className="mx-auto max-w-5xl px-6 text-center mb-14">
          <div className="text-gold text-xs tracking-[0.35em] uppercase mb-3">Contatto</div>
          <h1 className="script-title text-7xl">Ci vediamo presto</h1>
          <div className="gold-rule w-40 mx-auto mt-5" />
          <p className="mt-6 text-cream/70 italic max-w-xl mx-auto">
            Pour réserver votre table, appelez-nous. La cuisine se pense à l'italienne : autour d'un téléphone,
            comme à la maison.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <InfoCard icon={<MapPin className="h-5 w-5 text-gold" />} title="Adresse">
              34 Place Lafayette
              <br />
              47300 Villeneuve-sur-Lot
              <br />
              <a
                href="https://maps.google.com/?q=34+Place+Lafayette,+47300+Villeneuve-sur-Lot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline text-sm inline-block mt-2"
              >
                Itinéraire →
              </a>
            </InfoCard>

            <InfoCard icon={<Phone className="h-5 w-5 text-gold" />} title="Téléphone">
              <a href="tel:+33547665023" className="text-cream hover:text-gold text-lg font-display">
                +33 5 47 66 50 23
              </a>
              <div className="mt-3">
                <a
                  href="tel:+33547665023"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy hover:bg-gold-soft transition-colors tracking-wider uppercase"
                >
                  <Phone className="h-4 w-4" /> Réserver maintenant
                </a>
              </div>
            </InfoCard>

            <InfoCard icon={<Clock className="h-5 w-5 text-gold" />} title="Horaires">
              <ul className="space-y-1">
                <Row day="Lundi" hours="Fermé" muted />
                <Row day="Mardi – Samedi" hours="9h – 15h · 18h – 22h" />
                <Row day="Dimanche" hours="10h – 14h · 17h – 22h" />
              </ul>
            </InfoCard>

            <InfoCard icon={<Facebook className="h-5 w-5 text-gold" />} title="Suivez-nous">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Facebook — La Nuova Cantina
              </a>
            </InfoCard>
          </div>

          <div className="rounded-lg overflow-hidden ring-1 ring-gold/30 shadow-2xl min-h-[500px]">
            <iframe
              title="Carte — La Nuova Cantina"
              src="https://www.google.com/maps?q=34+Place+Lafayette,+47300+Villeneuve-sur-Lot&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gold/25 bg-navy/60 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full bg-navy-deep grid place-items-center border border-gold/30">
          {icon}
        </div>
        <h3 className="text-gold text-xs tracking-[0.25em] uppercase">{title}</h3>
      </div>
      <div className="text-cream/85 font-serif">{children}</div>
    </div>
  );
}

function Row({ day, hours, muted }: { day: string; hours: string; muted?: boolean }) {
  return (
    <li className={`flex items-baseline ${muted ? "text-cream/50" : ""}`}>
      <span className="font-display">{day}</span>
      <span className="dotted-leader" />
      <span className="italic">{hours}</span>
    </li>
  );
}
