# Les Bijoux de Kitsune

Site Next.js de la boutique, hébergé sur Netlify (lesbijouxdekitsune.netlify.app pendant le développement).

- `data/products.json` : les 95 produits du catalogue (en attendant Shopify)
- `app/` : les pages (accueil, boutique, fiches produit, gammes, rituel, histoire, contact, pages légales)
- `public/logos/` : le logo vectorisé
- Formulaire de contact : Netlify Forms (`public/__forms.html`)

Développement : `npm install` puis `npm run dev`.

Avant le lancement : retirer le `noindex` (netlify.toml, app/layout.tsx, app/robots.ts), brancher Shopify, compléter les éléments en rouge.
