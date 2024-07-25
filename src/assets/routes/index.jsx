import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../views/Home'
import ErrorPage from '../views/ErrorPage'
import Detail from '../views/Detail'
import Profile from '../views/Profile'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />
	},
	{
		path: '/movie/:movieId',
		element: <Detail />,
		errorElement: <ErrorPage />
	},
	{
		path: '/profile',
		element: <Profile />,
		errorElement: <ErrorPage />
	}
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes
