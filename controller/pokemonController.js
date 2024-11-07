const pokemonModel = require('../model/pokemonModel');

exports.index = (req, res) => {
  pokemonModel.getAllPokemons((err, pokemons) => {
    if (err) {
      res.status(500).send('Error fetching data from the database');
    } else {
      res.render('index', { pokemons });
    }
  });
};
