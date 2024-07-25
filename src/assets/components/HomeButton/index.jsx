import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const HomeButtom = () => {
	const iconHome = <FontAwesomeIcon icon={faHouse} />
	return <Link to="/">{iconHome}</Link>
}

export default HomeButtom
