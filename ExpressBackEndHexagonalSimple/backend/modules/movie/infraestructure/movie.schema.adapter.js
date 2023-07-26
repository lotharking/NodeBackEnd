const MovieSchema = require('./movie.schema');
const moviesData = require('./defectMovies/movie.defect.data');

const MovieSchemaAdapter = {
  initialize: function () {
    MovieSchema.deleteMany()
      .then(() => {
        MovieSchema.create(moviesData).catch((error) => {
          console.error('Error al crear registros por defecto:', error);
        });
      })
      .catch((error) => {
        console.error('Error al eliminar registros existentes:', error);
      });
  },
  getMovies: function () {
    return MovieSchema.find();
  },
};

module.exports = MovieSchemaAdapter;
