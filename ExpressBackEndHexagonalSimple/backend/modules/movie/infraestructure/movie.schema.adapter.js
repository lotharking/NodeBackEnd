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
    try {
      return MovieSchema.find();
    } catch (error){
      throw new Error("Error al leer las peliculas: " + error)
    }
  },
};

module.exports = MovieSchemaAdapter;
