import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/carte")({
  head: () => ({
    meta: [
      { title: "La Carte — La Nuova Cantina" },
      { name: "description", content: "Découvrez notre carte : pizze rosse, pizze gourmet, saltimbocca et suppléments. Cuisson au four à bois, produits italiens DOP et IGP." },
      { property: "og:title", content: "La Carte — La Nuova Cantina" },
      { property: "og:description", content: "Pizze rosse, gourmet, saltimbocca et spécialités italiennes." },
    ],
  }),
  component: Carte,
});

type Dish = { name: string; desc: string; price: string };
type Section = { title: string; badge?: string; items: Dish[] };

const sections: Section[] = [
  {
    title: "Pizze rosse",
    items: [
      { name: "Margherita", desc: "Sauce tomate San Marzano DOP, mozzarella, basilic et huile d'olive", price: "11,00 €" },
      { name: "Siciliana", desc: "Double sauce tomate San Marzano DOP, anchois, câpres, olives taggiasche et basilic", price: "15,00 €" },
      { name: "Fuoco dell'Etna", desc: "Sauce tomate San Marzano DOP, mozzarella fumée, spianata piccante, n'duja, olives taggiasche et basilic", price: "16,50 €" },
      { name: "Regina", desc: "Sauce tomate San Marzano DOP, mozzarella, jambon blanc, champignons et basilic", price: "13,00 €" },
      { name: "Vegetariana", desc: "Sauce tomate San Marzano DOP, mozzarella, mix de légumes de saison", price: "15,00 €" },
      { name: "Tonno e cipolla", desc: "Sauce tomate San Marzano DOP, thon, oignons, olives taggiasche et basilic", price: "16,00 €" },
      { name: "Norma", desc: "Sauce tomate San Marzano DOP, mozzarella, aubergines, ricotta salée et basilic", price: "16,00 €" },
      { name: "Primavera", desc: "Sauce tomate San Marzano DOP, mozzarella, jambon de Parme AOP, roquette, copeaux de Parmigiano Reggiano et tomates cerises", price: "17,00 €" },
    ],
  },
  {
    title: "Pizze bianche",
    items: [
      { name: "Formaggi", desc: "Base crème, mix de fromages italiens et basilic", price: "14,00 €" },
      { name: "Capra e miele", desc: "Base crème, mozzarella, fromage de chèvre, miel et roquette", price: "14,50 €" },
      { name: "Friarielli", desc: "Mozzarella fumée, saucisse, friarielli (brocoli napolitain)", price: "16,00 €" },
      { name: "Bufala", desc: "Mozzarella de bufflonne DOP, tomates cerise del Piennolo DOP et basilic", price: "17,00 €" },
      { name: "Porchetta", desc: "Mozzarella fumée, Porchetta di Ariccia IGP, pomme de terre au four à bois et crème de parmesan", price: "18,00 €" },
    ],
  },
  {
    title: "Pizze gourmet",
    items: [
      { name: "Genovese", desc: "Pesto basilic, mozzarella fumée, guanciale et burrata", price: "17,00 €" },
      { name: "Salmone", desc: "Crème de courgettes, mozzarella fumée, saumon et Philadelphia", price: "17,00 €" },
      { name: "Pistacchio", desc: "Crème de pistache, mozzarella, mortadella, burrata et grains de pistache", price: "18,00 €" },
      { name: "Tartufata", desc: "Base ricotta à la truffe, mozzarella, jambon à la truffe et copeaux de truffe", price: "19,00 €" },
    ],
  },
  {
    title: "Saltimbocca",
    badge: "Nouveau",
    items: [
      { name: "Classico", desc: "Sauce tomate San Marzano DOP, mozzarella, jambon blanc et basilic", price: "13,00 €" },
      { name: "Il siciliano", desc: "Crème de pistache, mozzarella, porchetta di Ariccia et grains de pistache", price: "17,50 €" },
      { name: "Il montanaro", desc: "Mozzarella fumée, speck, taleggio et pomme de terre au four à bois", price: "16,00 €" },
      { name: "Il goloso", desc: "Crème de champignons, mozzarella, saucisse, roquette et stracciatella", price: "17,00 €" },
    ],
  },
  {
    title: "Suppléments",
    items: [
      { name: "Charcuterie", desc: "", price: "1,50 €" },
      { name: "Porchetta", desc: "", price: "2,00 €" },
      { name: "Saumon", desc: "", price: "2,00 €" },
      { name: "Burrata", desc: "", price: "2,50 €" },
    ],
  },
];

function Carte() {
  return (
    <SiteLayout>
      <div className="bg-navy-deep text-cream min-h-screen">
        {/* Header */}
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-10 text-center">
          <div className="text-gold text-xs tracking-[0.35em] uppercase mb-4">Menù</div>
          <h1 className="script-title text-7xl md:text-8xl">La Carta</h1>
          <div className="gold-rule w-40 mx-auto mt-6" />
          <p className="mt-6 text-cream/70 italic max-w-xl mx-auto">
            Nos pizzas sont cuites au four à bois. Pâte à maturation lente 48h, farines italiennes,
            produits DOP et IGP sélectionnés directement en Italie.
          </p>
        </div>

        {/* Sections */}
        <div className="mx-auto max-w-3xl px-6 pb-24 space-y-20">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="text-center mb-10 relative">
                {section.badge && (
                  <span className="inline-block bg-gold text-navy text-[0.65rem] tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-3 font-sans font-medium">
                    {section.badge}
                  </span>
                )}
                <h2 className="script-title text-6xl md:text-7xl">{section.title}</h2>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <span className="h-px w-8 bg-gold/50" />
                  <span className="text-gold text-xs">✦</span>
                  <span className="h-px w-8 bg-gold/50" />
                </div>
              </div>

              <ul className="space-y-7">
                {section.items.map((dish) => (
                  <li key={dish.name}>
                    <div className="flex items-baseline">
                      <span className="font-display text-xl md:text-2xl text-cream">{dish.name}</span>
                      <span className="dotted-leader" />
                      <span className="font-display text-lg text-gold shrink-0">{dish.price}</span>
                    </div>
                    {dish.desc && (
                      <p className="mt-1.5 text-cream/65 italic text-[0.95rem] font-serif max-w-[85%]">
                        {dish.desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="text-center pt-8 border-t border-gold/20">
            <p className="italic text-cream/60">Buon appetito!</p>
            <p className="mt-2 text-xs text-cream/40">
              Liste des allergènes disponible sur demande. Prix nets, service compris.
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
