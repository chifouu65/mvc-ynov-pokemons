const express = require('express');
const path = require('path');
const pokemonController = require('./controller/pokemonController');

const app = express();
const port = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Serve static files (e.g., CSS, JS) from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Set up the route for the homepage
app.get('/', pokemonController.index);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
