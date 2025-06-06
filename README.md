# 🎬 Ma Liste de Séries — Projet Angular 19 (Standalone + Signals)

Ce projet Angular permet de gérer une collection de séries (vues ou à voir), avec une interface moderne et dynamique basée sur Angular Material, les `signals`, et des composants standalone.

---

## 🚀 Fonctionnalités

✅ Ajout de séries via un **formulaire stylisé**  
✅ Affichage sous forme de **cartes élégantes**  
✅ Bouton **“Vu !”** géré par `signals`  
✅ **Filtrage dynamique** par genre et note minimale  
✅ **Réinitialisation des filtres**  
✅ **Résumé des statistiques** dans une page `/stats`  
✅ **Camembert interactif** via `chart.js`  
✅ **Détails d’une série** via la route `/series/:id`  
✅ **Popup de confirmation** avec SweetAlert2  
✅ Adapté au **mode sombre clair** et **responsive**

---

## 🛠️ Technologies utilisées

| Outil / Librairie     | Version       | Rôle                                      |
|------------------------|---------------|-------------------------------------------|
| Angular                | 19.x          | Framework frontend                        |
| Angular Material       | 17+           | Composants UI                             |
| `signals`              | Angular 16+   | Gestion d’état réactif                    |
| `chart.js` + `ng2-charts` | 3.9.1 / 4.0.1 | Statistiques graphiques (camembert)      |
| SweetAlert2            | ^11           | Notifications et popups modernes          |

---

## 📂 Structure du projet

- `/ajout` → Formulaire de création de série
- `/` → Liste filtrable des séries (cartes)
- `/stats` → Statistiques générales + graphique
- `/series/:id` → Fiche détaillée d’une série

---

## 📦 Stockage

Les données sont **locales** : gérées avec des `signals` dans `SerieService`.  
Pas de backend, pas de base de données. Le focus est sur le frontend Angular.

---

## ✨ Points forts pédagogiques

- Utilisation avancée de `computed`, `signal`, `standalone`
- Matérialisation d’un design personnalisé (palette magenta/violet)
- Composants réactifs + modularité + bonne lisibilité du code
- Manipulation dynamique de données sans base

---

## 🧪 Améliorations possibles

- Sauvegarde dans `localStorage` ou fichier `.json`
- Ajout d’un backend Flask ou Express
- Ajout d’une pagination ou d’un système de favoris
- Ajout de tests unitaires (avec Jasmine/Karma)

---

## 👤 Réalisé par

**Farouck LATOUNDJI**  
📍 Orléans, France  
🎓 Étudiant en Data & IA (Licence/Mastère)  
📧 latoundjifarouck@gmail.com

---

