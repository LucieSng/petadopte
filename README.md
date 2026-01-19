🐾 Adaopte

Adaopte est une application web responsive dédiée à la présentation et à l’adoption d’animaux.
Elle permet aux utilisateurs de découvrir des animaux disponibles à l’adoption et de filtrer leur recherche selon différents critères.

🚀 Fonctionnalités

🏠 Page d’accueil

Navbar permettant de naviguer entre les différentes pages de l’application

Section de présentation

Formulaire de recherche d’animaux

Galerie d’images

Textes descriptifs

Footer

🔍 Recherche et filtrage

Formulaire de recherche accessible depuis la page d’accueil

Filtrage des animaux :

par type d’animal (via une liste déroulante)

par localisation

Possibilité de réinitialiser les paramètres du formulaire

Redirection vers la page "J’adopte" avec les résultats filtrés

🐶 Page "J’adopte"

Affichage des animaux sous forme de cartes

Résultats dynamiques en fonction des critères de recherche

Possibilité d’afficher tous les animaux, sans filtre

📱 Responsive

Application développée en mobile-first

Interface adaptée aux mobiles, tablettes et ordinateurs

🗂️ Données

Les données des animaux sont stockées dans un fichier JSON

Chaque animal contient les informations nécessaires à son affichage (type, localisation, image, etc.)

Les filtres sont appliqués côté frontend à partir de ces données

🛠️ Technologies utilisées

⚛️ React (avec Vite)

🟦 TypeScript

🎨 Tailwind CSS

🔀 React Router

📄 Données locales en JSON

📦 Installation et lancement du projet

Cloner le dépôt :

git clone <url-du-repo>

Installer les dépendances :

npm install

Lancer le serveur de développement :

npm run dev

Ouvrir l’application dans le navigateur :

http://localhost:5173

🧭 Navigation

Accueil : présentation générale et formulaire de recherche

J’adopte : liste des animaux disponibles, avec ou sans filtres

Navigation fluide assurée par React Router

✨ Améliorations possibles

Ajout d’une fiche détaillée par animal

Connexion à une API backend

Gestion des favoris

Pagination ou chargement progressif

Authentification utilisateur

👩‍💻 Auteur

Projet réalisé avec React, TypeScript et Tailwind CSS, dans un objectif d’apprentissage et de mise en pratique du développement frontend moderne.
