## Problème

Les images du site utilisent le système **Lovable Assets** : elles sont servies depuis les URL `/__l5e/assets-v1/{id}/{fichier}.jpg`. Cette infrastructure n'existe que sur l'hébergement Lovable — sur Vercel, ces chemins renvoient 404, donc aucune image ne s'affiche (logo header/footer, hero, galerie, cartes).

## Solution

Rapatrier les images dans le repo (dossier `public/`) pour qu'elles soient servies directement par Vercel, puis mettre à jour toutes les références.

## Étapes

1. **Télécharger** les 8 assets depuis leur URL Lovable actuelle et les enregistrer dans `public/images/` :
   - `logo-alt.png`
   - `four-antipasti.jpg`, `gnocchi.jpg`, `paccheri.jpg`
   - `pizza-bianca.jpg`, `pizza-mortadella.jpg`, `pizza-salmone.jpg`
   - `logo.jpg` (si encore utilisé, sinon ignoré)

2. **Remplacer les imports** `*.asset.json` par des chemins absolus `/images/xxx.jpg` dans :
   - `src/components/SiteLayout.tsx` (logo header + footer)
   - `src/routes/index.tsx` (hero, galerie preview, og:image)
   - `src/routes/galerie.tsx` (grille + og:image)
   - `src/routes/carte.tsx` et `src/routes/contact.tsx` si références présentes

3. **Supprimer** les fichiers `src/assets/*.asset.json` devenus inutiles.

4. **Vérifier le build** (`bun run build`) pour confirmer qu'aucun import ne casse.

## Détails techniques

- Les fichiers dans `public/` sont servis par Vercel à la racine (`/images/logo-alt.png`).
- Les URL og:image doivent rester absolues côté production : on garde le chemin relatif `/images/...` — Vercel/les crawlers résolvent contre le domaine du site.
- Aucune modification back-end nécessaire, aucun changement de dépendance.

Note : si tu prévois de continuer à utiliser Lovable en parallèle, ces images continueront de fonctionner puisque `public/` marche sur les deux plateformes.