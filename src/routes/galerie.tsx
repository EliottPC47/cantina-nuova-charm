import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import pizzaSalmone from "@/assets/pizza-salmone.asset.json";
import pizzaBianca from "@/assets/pizza-bianca.asset.json";
import pizzaMortadella from "@/assets/pizza-mortadella.asset.json";
import gnocchi from "@/assets/gnocchi.asset.json";
import paccheri from "@/assets/paccheri.asset.json";
import fourAntipasti from "@/assets/four-antipasti.asset.json";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — La Nuova Cantina" },
      { name: "description", content: "Photos de nos pizzas au four à bois, plats et four traditionnel. Trattoria italienne à Villeneuve-sur-Lot." },
      { property: "og:title", content: "Galerie — La Nuova Cantina" },
      { property: "og:description", content: "Pizzas, pâtes fraîches, antipasti et four à bois." },
      { property: "og:image", content: fourAntipasti.url },
    ],
  }),
  component: Galerie,
});

const items = [
  { src: pizzaSalmone.url, label: "Pizza Salmone", size: "tall" },
  { src: fourAntipasti.url, label: "Forno a legna & antipasti", size: "wide" },
  { src: pizzaBianca.url, label: "Pizza Bianca", size: "sq" },
  { src: gnocchi.url, label: "Gnocchi al ragù", size: "sq" },
  { src: paccheri.url, label: "Paccheri alla Norma", size: "tall" },
  { src: pizzaMortadella.url, label: "Pistacchio & Mortadella", size: "wide" },
];

function Galerie() {
  return (
    <SiteLayout>
      <div className="wood-bg py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <div className="text-gold text-xs tracking-[0.35em] uppercase mb-3">Galleria</div>
            <h1 className="script-title text-7xl">Le nostre foto</h1>
            <div className="gold-rule w-40 mx-auto mt-5" />
            <p className="mt-6 text-foreground/70 italic max-w-xl mx-auto">
              Quelques images de la cuisine, du four à bois et de notre trattoria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[220px]">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10 bg-navy ${
                  it.size === "tall" ? "row-span-2" : it.size === "wide" ? "col-span-2" : ""
                }`}
              >
                <img
                  src={it.src}
                  alt={it.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent px-4 py-3">
                  <span className="script-title text-2xl">{it.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
