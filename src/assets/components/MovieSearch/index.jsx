import styles from './MovieSearch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const MovieSearch = ({ search, setSearch }) => {
	const iconSearch = <FontAwesomeIcon icon={faSearch} />

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				if (e.target[0].value === '') {
					setSearch('Avengers')
				}
			}}
			className={styles.searchForm}
		>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className={styles.movieSearch}
			/>
			<button>{iconSearch}</button>
		</form>
	)
}

export default MovieSearch
