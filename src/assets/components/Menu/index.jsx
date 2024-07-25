import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
	const iconHouse = <FontAwesomeIcon icon={faHouse} />
	const iconUser = <FontAwesomeIcon icon={faUser} />
	return (
		<nav className={styles.menu}>
			<ul>
				<li>
					<Link to="/">{iconHouse}</Link>
				</li>
				<li>
					<Link to="/profile">{iconUser}</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
