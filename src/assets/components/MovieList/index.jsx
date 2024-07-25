import MovieCard from '../MovieCard'
import styles from './MovieList.module.css'

const MovieList = ({ movies }) => {
	const listMovies = (data) => {
		if (!data) {
			return <h1>No movies found</h1>
		}
		return data.map((movie) => {
			return <MovieCard movie={movie} key={movie.imdbID} />
		})
	}

	return <div className={styles.movieList}>{listMovies(movies)}</div>
}

export default MovieList
