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
