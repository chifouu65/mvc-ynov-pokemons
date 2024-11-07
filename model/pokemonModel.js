const mysql = require('mysql2');

// Create a connection to the MySQL database (XAMPP's MySQL server)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // Default username in XAMPP
  password: '',          // Default password is empty for XAMPP
  database: 'pokemon_db'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Get all Pokémon from the database
exports.getAllPokemons = (callback) => {
  db.query('SELECT * FROM pokemons', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Récupérer un Pokémon par son ID
exports.getPokemonById = (id, callback) => {
  const query = 'SELECT * FROM pokemons WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    // Si aucun Pokémon n'est trouvé, renvoyer un objet vide
    callback(null, results.length > 0 ? results[0] : null);
  });
};

// Ajouter un Pokémon dans la base de données
exports.createPokemon = (pokemon, callback) => {
  const { name, type } = pokemon;

  const query = 'INSERT INTO pokemons (name, type) VALUES (?, ?)';

  db.query(query, [name, type], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Supprimer un Pokémon par son ID
exports.deletePokemon = (id, callback) => {
  const query = 'DELETE FROM pokemons WHERE id = ?';

  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Modifier un Pokémon par son ID
exports.editPokemon = (id, updatedPokemon, callback) => {
  const { name, type } = updatedPokemon;

  const query = `
    UPDATE pokemons
    SET name = ?, type = ?
    WHERE id = ?`;

  console.log('Exécution de la requête SQL pour modifier un Pokémon:', query, [name, type, id]);  // Ajout du log pour vérifier la requête

  db.query(query, [name, type, id], (err, results) => {
    if (err) {
      console.error('Erreur dans la modification du Pokémon:', err);  // Affiche l'erreur si elle existe
      return callback(err, null);
    }
    console.log('Résultats de la requête de modification:', results);  // Log les résultats
    callback(null, results);
  });
};

