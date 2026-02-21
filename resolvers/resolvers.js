import MovieModel from '../models/Movie.js';

const movieResolvers = {
  Query: {
    movies: async () => {
      return await MovieModel.find();
    },

    movie: async (_, { id }) => {
      return await MovieModel.findById(id);
    },

    moviesByDirector: async (_, { director_name }) => {
      return await MovieModel.findByDirector(director_name);
    },
  },

  Mutation: {
    addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = new MovieModel({ name, director_name, production_house, release_date, rating });
      return await newMovie.save();
    },

    updateMovie: async (_, { id, ...fields }) => {
      return await MovieModel.findByIdAndUpdate(id, fields, { new: true });
    },

    deleteMovie: async (_, { id }) => {
      return await MovieModel.findByIdAndDelete(id);
    },
  },
};

export default movieResolvers;
