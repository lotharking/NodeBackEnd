const MovieSchemaAdapter = require('../../infraestructure/movie.schema.adapter');

class ReadMovie {
  constructor() {}
  async getMoviesUseCase() {
    const moviesData = await MovieSchemaAdapter.getMovies();
    return moviesData;
  }
}

module.exports = ReadMovie;
