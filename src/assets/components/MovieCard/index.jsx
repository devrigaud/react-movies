import { useNavigate } from 'react-router-dom'
import styles from './MovieCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import useLikeEvents from '../../../hooks/usedLikeEvents'

const MovieCard = ({ movie }) => {
	const { liked, toggleLike } = useLikeEvents(movie.imdbID)
	const iconHeart = <FontAwesomeIcon icon={faHeart} />
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/movie/${movie.imdbID}`)
	}

	const handleFavButton = () => {
		toggleLike()
	}

	const poster =
		movie.Poster === 'N/A'
			? 'https://via.placeholder.com/300x400'
			: movie.Poster
	const title = movie.Title === 'N/A' ? 'No title' : movie.Title

	return (
		<div className={styles.movieCard}>
			<button
				onClick={handleFavButton}
				className={`${liked ? styles.likeButtonActive : ''} ${
					styles.likeButton
				}`}
			>
				{iconHeart}
			</button>
			<img src={poster} alt={title} onClick={handleNavigate} />
			<h3>{title}</h3>
		</div>
	)
}

export default MovieCard
