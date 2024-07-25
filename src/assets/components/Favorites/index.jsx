import { useState, useEffect } from 'react'
import { LIKED_EVENTS_STORAGE_KEY } from '../../utils/constants'
import MovieList from '../../components/MovieList'
import styles from './Favorites.module.css'

const Favorites = () => {
	const [likedEvents, setLikedEvents] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState({})

	useEffect(() => {
		const fetchLikedEvents = async () => {
			try {
				setLoading(true)
				const likedEvents =
					JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
				const results = []
				for (const eventId of likedEvents) {
					const response = await fetch(
						`http://www.omdbapi.com/?apikey=f322a02a&i=${eventId}`
					)
					const data = await response.json()
					results.push(data)
				}
				setLikedEvents(results)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		fetchLikedEvents()
	}, [])

	if (error.message) {
		return <div>{error.message}</div>
	}

	if (!likedEvents.length) {
		return (
			<>
				<div className={styles.favorites}>
					<h2 className="headline">My Favorites</h2>
					{loading ? <div>Loading...</div> : <p>No Favorites Yet!</p>}
				</div>
			</>
		)
	}

	return (
		<>
			<div className={styles.favorites}>
				<h2 className="headline">My Favorites</h2>
				{loading ? <div>Loading...</div> : <MovieList movies={likedEvents} />}
			</div>
		</>
	)
}

export default Favorites
