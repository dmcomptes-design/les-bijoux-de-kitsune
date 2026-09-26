# Thème Shopify — Les Bijoux de Kitsune

Thème sur mesure (Online Store 2.0) à la charte du Monde de Kitsune : prune, or, crème, Cormorant Garamond et Jost.
La branche `main` est reliée à Shopify ; l'ancienne version Next.js est archivée dans la branche `archive-nextjs`.

## Mise en place dans Shopify

1. **Boutique en ligne › Thèmes › Ajouter un thème › Se connecter depuis GitHub**, dépôt `les-bijoux-de-kitsune`, branche `main`.
2. **Collections automatiques** (Produits › Collections), avec ces identifiants exacts :
   - `signature` : étiquette = `gamme:signature`
   - `essentiels` : étiquette = `gamme:essentiels`
   - `selection` : étiquette = `gamme:selection`
3. **Pages** (Boutique en ligne › Pages), avec le modèle indiqué :
   - Notre histoire → modèle `histoire`, identifiant `notre-histoire`
   - Le rituel → modèle `rituel`, identifiant `rituel`
   - Contact → modèle `contact`, identifiant `contact`
   - Mentions légales → modèle par défaut, identifiant `mentions-legales`
4. **Politiques** (Paramètres › Politiques) : remboursement, livraison, CGV, confidentialité. Elles s'affichent seules dans le pied de page.
5. **Réglages du thème** : e-mail affiché, Instagram, délais d'expédition.

## Étiquettes produit utilisées par le thème

`gamme:signature` · `gamme:essentiels` · `gamme:selection` · `fait-main` · `dropshipping` · `rituel` · `personnalise`

- `fait-main` affiche « Fait main » et le badge Rituel ; sans elle, la fiche indique « Sélectionné par Kitsune » et le délai fournisseur.
- `personnalise` ajoute un champ « Vos informations » à la fiche et la mention sans rétractation.
