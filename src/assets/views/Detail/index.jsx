import MovieDetail from '../../components/MovieDetail'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Detail = () => {
	const { movieId } = useParams()
	return (
		<>
			<Header />
			<MovieDetail movie={movieId} />
			<Footer />
		</>
	)
}

export default Detail
