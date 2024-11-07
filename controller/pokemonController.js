const pokemonModel = require('../model/pokemonModel');

// Afficher la liste de tous les Pokémon
exports.index = (req, res) => {
  pokemonModel.getAllPokemons((err, pokemons) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données de la base de données');
    } else {
      res.render('index', { pokemons });
    }
  });
};

// Créer un Pokémon
exports.create = (req, res) => {
  const { name, type } = req.body;

  // Validation des données reçues
  if (!name || !type) {
    return res.status(400).send('Le nom et le type sont requis');
  }

  const newPokemon = { name, type };

  pokemonModel.createPokemon(newPokemon, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la création du Pokémon');
    } else {
      res.redirect('/');  // Rediriger vers la page d\'index après création
    }
  });
};


// Supprimer un Pokémon
exports.delete = (req, res) => {
  const id = req.params.id;

  pokemonModel.deletePokemon(id, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression du Pokémon');
    } else {
      res.redirect('/');  // Rediriger vers la page d\'index après suppression
    }
  });
};

// Modifier un Pokémon
exports.edit = (req, res) => {
  const id = req.params.id;
  const { name, type } = req.body;

  // Validation des données reçues
  if (!name || !type) {
    return res.status(400).send('Le nom et le type sont requis');
  }

  const updatedPokemon = { name, type };

  pokemonModel.editPokemon(id, updatedPokemon, (err, results) => {
    if (err) {
      console.error('Erreur lors de la modification du Pokémon:', err);  // Ajout du log d'erreur
      res.status(500).send('Erreur lors de la modification du Pokémon');
    } else {
      console.log('Pokémon modifié avec succès:', results);  // Log les résultats
      res.redirect('/');  // Rediriger vers la page d'index après modification
    }
  });
};

// Récupérer un Pokémon par son ID pour l'édition
exports.editForm = (id, callback) => {
  pokemonModel.getPokemonById(id, (err, pokemon) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, pokemon);
  });
};
