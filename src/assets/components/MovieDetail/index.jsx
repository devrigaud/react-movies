import { useState, useEffect } from 'react'
import styles from './MovieDetail.module.css'

const MovieDetail = ({ movie }) => {
	const [movieDetail, setMovieDetail] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	const fetchMovieDetail = async (params) => {
		try {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=f322a02a&i=${params}`
			)
			const data = await response.json()
			setMovieDetail(data)
			setIsLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchMovieDetail(movie)
	}, [movie])

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<>
			<div className={styles.movieDetail}>
				<div className={styles.split}>
					<div className={styles.side}>
						<img src={movieDetail.Poster} alt={movieDetail.Title} />
					</div>
					<div className={styles.side}>
						<h2>{movieDetail.Title}</h2>
						<p>{movieDetail.Plot}</p>
						<p>
							<strong>Rated: </strong>
							{movieDetail.Rated}
						</p>
						<p>
							<strong>Year: </strong> {movieDetail.Year}
						</p>
						<p>
							<strong>Actors: </strong>
							{movieDetail.Actors}.
						</p>
						<p>
							<strong>Director: </strong>
							{movieDetail.Director}
						</p>
						<p>
							<strong>Runtime: </strong>
							{movieDetail.Runtime}
						</p>
						<p>
							<strong>Genre: </strong>
							{movieDetail.Genre}.
						</p>
						<p>
							<strong>Ratings: </strong>
						</p>
						<ul>
							{movieDetail.Ratings.map((rating) => (
								<li key={rating.Source}>
									{rating.Source}: {rating.Value}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default MovieDetail
