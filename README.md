# Campus Party Planner

Application web React permettant aux étudiants de Rennes et du Mans de découvrir et suivre les événements festifs de leur ville.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Lancement du projet](#lancement-du-projet)
- [Architecture](#architecture)
- [Répartition des tâches](#répartition-des-tâches)
- [Collaboration Git](#collaboration-git)

---

## Fonctionnalités

### Page d'accueil (`/`)
- **Liste des événements** : Affichage en grille responsive des événements (soirées, concerts, festivals)
- **Sélecteur de ville** : Menu déroulant pour filtrer les événements par ville (Rennes, Le Mans)
- **Système de likes** : Bouton like/unlike sur chaque événement avec icône coeur
- **Persistance des likes** : Les likes sont sauvegardés dans le localStorage et persistent après rechargement
- **Design responsive** : Adapté mobile, tablette et desktop
- **Animations** : Effets de hover, transitions, animations

### Page des statistiques (`/stats`)
- **Graphique Chart.js** : Visualisation du nombre d'événements par catégorie
- **Données dynamiques** : Calcul automatique des statistiques basé sur les événements chargés
- **Navigation** : Retour vers la page d'accueil

### Fonctionnalités techniques
- **API REST** : Récupération des données depuis une API backend
- **Context API** : Gestion d'état globale pour éviter le props drilling
- **React Router** : Navigation SPA (Single Page Application)
- **localStorage** : Persistance des favoris côté client
- **Convention BEM** : CSS structuré et maintenable

---

## Technologies utilisées

- **React** : Librairie JavaScript pour interfaces utilisateur
- **Vite** : Build tool rapide pour le développement
- **React Router DOM** : Gestion du routing côté client
- **Chart.js + react-chartjs-2** : Visualisation de données
- **CSS3** : Styling avec convention BEM
- **localStorage API** : Persistance des données

---

## Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm
- L'API backend fournie pour le TP

### Étapes

1. **Cloner le dépôt**
```bash
git clone https://github.com/enzoleafcode/campus-party-planner.git
cd campus-party-planner
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer le proxy Vite** (déjà fait dans `vite.config.js`)

```

---

## Lancement du projet

### 1. Démarrer l'API backend

Dans un **premier terminal** :
```bash
# Naviguer vers le dossier de l'API
cd chemin/vers/event-api

# Installer les dépendances (première fois seulement)
npm install

# Démarrer l'API
npm start
```

L'API sera accessible sur `http://localhost:3000`

**Endpoints disponibles :**
- `GET /api/events` - Tous les événements
- `GET /api/events?city=Rennes` - Événements filtrés par ville
- `GET /api/cities` - Liste des villes disponibles

### 2. Démarrer l'application React

Dans un **second terminal** :
```bash
# À la racine du projet campus-party-planner
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### 3. Utilisation

- Ouvrir `http://localhost:5173` dans le navigateur
- Sélectionner une ville dans le menu déroulant
- Liker des événements en cliquant sur les cœurs
- Naviguer vers les statistiques via le bouton "Voir les stats"
- Recharger la page pour vérifier la persistance des likes

---

##  Répartition des tâches en binôme

### Jour 1 : Initialisation (en commun)
- **Vincent** : Création du projet, configuration Git
- **Mael** : Clone du projet, test de l'installation
- **Ensemble** : Structure de dossiers, configuration de l'API, du Context, du routing, 

### Jour 2 : Développement des composants

#### Vincent
- **CitySelector.jsx** : Menu déroulant de sélection de ville
  - Récupération des villes depuis l'API
  - Gestion du changement de ville via Context
- **EventCard.jsx** : Carte d'événement
  - Affichage des informations (nom, date, lieu, catégorie, image)
  - Bouton like/unlike avec icône cœur
  - Formatage de la date (jj/mm/aaaa)
  - Gestion du state de like via Context

#### Mael
- **EventList.jsx** : Grille d'événements
  - Gestion du cas "aucun événement"
  - Mapping des EventCard

-  **Navigation** : Liens entre pages

- **StatsChart.jsx** : Graphique statistiques
  - Configuration Chart.js
  - Calcul des statistiques (nombre par catégorie)
  - Affichage en graphique à barres et doughnut

### Jour 3 : Intégration et finitions

#### Vincent
-  **HomePage.jsx** : Intégration de CitySelector + EventList
-  **CSS responsive** : Adaptation mobile/tablette/desktop
-  **Animations CSS** : Hover effects, transitions

#### Mael
-  **CSS responsive StatsPage.jsx** : Adaptation mobile/tablette/desktop
-  **Animations CSS** : Hover effects


#### Ensemble
-  **localStorage** : Persistance des likes
-  **Tests** : Vérification du flux complet
-  **Tests manuels** : Validation de toutes les fonctionnalités
-  **Documentation** : README.md


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.