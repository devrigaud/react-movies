import Menu from '../Menu'
import styles from './Header.module.css'
import MovieSearch from '../MovieSearch'
import { useLocation } from 'react-router-dom'

const Header = ({ search, setSearch }) => {
	const location = useLocation()

	return (
		<header className={styles.header}>
			<h1>Movies</h1>
			{location.pathname === '/' && (
				<MovieSearch search={search} setSearch={setSearch} />
			)}
			<Menu />
		</header>
	)
}

export default Header
