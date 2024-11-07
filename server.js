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

app.use(express.urlencoded({ extended: true }));  // Pour les formulaires (application/x-www-form-urlencoded)
app.use(express.json());  // Pour les requêtes JSON

// Route to display all Pokémon
app.get('/', pokemonController.index);

// Route to show the form for creating a new Pokémon
app.get('/create', (req, res) => {
  res.render('create');  // Render the form for adding a new Pokémon
});

// Route to handle the form submission for creating a new Pokémon
app.post('/create', pokemonController.create);

// Route to show the form for editing a Pokémon (based on ID)
app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  pokemonController.editForm(id, (err, pokemon) => {
    if (err) {
      return res.status(500).send('Error retrieving Pokémon details for edit');
    }
    res.render('edit', { pokemon });
  });
});

// Route to handle the form submission for editing a Pokémon
app.post('/edit/:id', pokemonController.edit);

// Route to delete a Pokémon (based on ID)
app.get('/delete/:id', pokemonController.delete);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
