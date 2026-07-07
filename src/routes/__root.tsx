import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-cream">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-cream/70">
          La page que vous cherchez n'existe pas.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gold-soft"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-cream">
          Cette page n'a pas pu se charger
        </h1>
        <p className="mt-2 text-sm text-cream/70">
          Un problème est survenu. Essayez de rafraîchir la page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gold-soft"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-gold/40 bg-transparent px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-gold/10"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "La Nuova Cantina — Pizzeria italienne à Villeneuve-sur-Lot" },
      {
        name: "description",
        content:
          "Pizzeria italienne authentique au four à bois à Villeneuve-sur-Lot. Pizze rosse, gourmet, saltimbocca et spécialités siciliennes par Amedeo, un italiano vero.",
      },
      { name: "author", content: "La Nuova Cantina" },
      { property: "og:title", content: "La Nuova Cantina — Pizzeria italienne à Villeneuve-sur-Lot" },
      {
        property: "og:description",
        content:
          "L'Italie authentique au cœur de Villeneuve-sur-Lot. Pizzas au four à bois, produits DOP/IGP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
