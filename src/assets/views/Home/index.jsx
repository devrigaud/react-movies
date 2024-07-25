import { useState, useEffect } from 'react'
import MovieList from '../../components/MovieList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home = () => {
	const [search, setSearch] = useState('Avengers')
	const [allMovies, setAllMovies] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const fetchMovies = async (params) => {
		try {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=f322a02a&s=${params}`
			)
			const data = await response.json()
			setAllMovies(data.Search)
			setIsLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchMovies(search)
	}, [search])

	return (
		<>
			<Header search={search} setSearch={setSearch} />
			{isLoading ? <h1>Loading...</h1> : <MovieList movies={allMovies} />}
			<Footer />
		</>
	)
}

export default Home
