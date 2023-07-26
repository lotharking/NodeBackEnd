// movie.module.js

const MovieController = require('./application/movie.controller');
const MovieSchema = require('./infraestructure/movie.schema');
const MovieSchemaAdapter = require('./infraestructure/movie.schema.adapter');

// Configuración y operaciones del módulo de peluclas
function setup(app) {
  MovieSchemaAdapter.initialize();
  const movieController = new MovieController();
  app.get('/movies', movieController.getAllMovies.bind(movieController));
}

module.exports = {
  setup,
};
