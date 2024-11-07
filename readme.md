# Projet Pokémon avec Node.js, MySQL et XAMPP

Ce projet implémente une simple application qui affiche une liste de **Pokémons** depuis une base de données MySQL, en utilisant **Node.js**, **Express.js**, et **EJS** pour le rendu des vues. Le serveur de base de données est géré via **XAMPP**.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **[XAMPP](https://www.apachefriends.org/index.html)** : pour gérer le serveur Apache et MySQL localement.
- **[Node.js](https://nodejs.org/)** : pour exécuter l'application côté serveur.

## Étapes d'installation

### 1. Installer XAMPP et MySQL

1. **Télécharger et installer XAMPP** depuis [le site officiel](https://www.apachefriends.org/index.html).
2. **Lancer XAMPP Control Panel** et démarrer les services **Apache** et **MySQL**.

### 2. Créer la base de données MySQL

1. Ouvrez votre navigateur et accédez à [phpMyAdmin](http://localhost/phpmyadmin).
2. Créez une nouvelle base de données nommée `pokemon_db`.
3. Créez une table `pokemons` avec les champs suivants :

```sql
CREATE DATABASE pokemon_db;

USE pokemon_db;

CREATE TABLE pokemons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL
);
```

4. Ajoutez quelques données de test dans la table :

```sql
INSERT INTO pokemons (name, type) VALUES
('Pikachu', 'Electric'),
('Bulbasaur', 'Grass'),
('Charmander', 'Fire');
```

### 3. Cloner ou télécharger ce projet

Clonez ou téléchargez ce projet dans un dossier de votre choix.

### 4. Installer les dépendances Node.js

Dans le répertoire du projet, ouvrez un terminal et exécutez les commandes suivantes pour initialiser un projet Node.js et installer les dépendances nécessaires :

```bash
cd mvc-pokemon
npm install
```

### 5. Configuration du projet

#### Fichier `server.js`

Le fichier `server.js` démarre un serveur Express.js qui gère la logique de routage et les vues.

#### Fichier `controller/pokemonController.js`

Ce fichier contient la logique pour récupérer les Pokémons depuis la base de données et les envoyer à la vue.

#### Fichier `model/pokemonModel.js`

Ce fichier s'occupe de la connexion à la base de données MySQL et de la récupération des données des Pokémons.

#### Fichier `view/index.ejs`

Ce fichier est la vue qui est rendue avec les données des Pokémons. Il utilise le moteur de templates EJS.

#### Dossier `data/` (facultatif)

Si vous préférez utiliser des données locales au lieu de la base de données, vous pouvez ajouter un fichier `pokemons.json` dans ce dossier pour simuler une base de données.

### 6. Démarrer l'application

1. Assurez-vous que **XAMPP** est en cours d'exécution et que le service **MySQL** est démarré.
2. Ouvrez un terminal dans le répertoire du projet et lancez le serveur Node.js avec **Nodemon** pour un rechargement automatique pendant le développement :

```bash
npm run dev
```

3. Accédez à **[http://localhost:3000](http://localhost:3000)** dans votre navigateur pour voir la liste des Pokémons récupérée depuis la base de données MySQL.

### 7. Structure du projet

Voici la structure du projet pour mieux comprendre l'organisation des fichiers :

```
pokemons/
├── controller/
│   └── pokemonController.js        # Logique des contrôleurs
├── model/
│   └── pokemonModel.js             # Modèle pour la gestion de la base de données
├── view/
│   └── index.ejs                   # Vue pour afficher les Pokémons
├── data/
│   └── pokemons.json               # (Facultatif) Données locales
├── server.js                        # Fichier principal du serveur Node.js
├── package.json                    # Fichier de configuration de Node.js
└── package-lock.json               # Fichier des dépendances
```

### 8. Explication du code

- **`server.js`** : Fichier principal qui configure Express.js pour écouter sur le port `3000`. Il gère la connexion à la base de données et redirige vers le contrôleur approprié.
  
- **`pokemonController.js`** : Le contrôleur qui récupère les données de la base de données via le modèle et les passe à la vue pour les afficher.
  
- **`pokemonModel.js`** : Gère la logique de la base de données (connexion, récupération des Pokémons).

- **`index.ejs`** : Utilise le moteur de template **EJS** pour afficher la liste des Pokémons.

### 9. Personnalisation

Si tu souhaites ajouter plus de fonctionnalités, voici quelques suggestions :

- **Ajouter une interface d'administration** pour ajouter, supprimer ou modifier les Pokémons.
- **Utiliser un système d'authentification** pour restreindre l'accès à l'administration.
- **Ajouter une page pour afficher les détails d'un Pokémon** en cliquant sur son nom dans la liste.
- **Améliorer la gestion des erreurs** (par exemple, si la base de données est injoignable).

### 10. Problèmes connus

- **Erreur de connexion à MySQL** : Si vous avez des problèmes de connexion à la base de données MySQL, vérifiez que **MySQL** est bien démarré dans **XAMPP** et que les informations de connexion dans `pokemonModel.js` sont correctes.
  
- **Problème de `npm install`** : Si vous obtenez des erreurs lors de l'installation des dépendances avec **npm**, assurez-vous que votre version de **Node.js** et **npm** est à jour.

---

### 11. Licence

Ce projet est sous la **MIT License**.