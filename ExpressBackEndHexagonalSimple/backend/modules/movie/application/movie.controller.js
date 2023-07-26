const ReadMovie = require('./readMovie/read.movie.usecase');

class MovieController {
  constructor() {}
  async getAllMovies(req, res) {
    try {
      const readMovie = new ReadMovie();
      const movies = await readMovie.getMoviesUseCase();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las peliculas' });
    }
  }
}

module.exports = MovieController;
