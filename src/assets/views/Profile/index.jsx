import Header from '../../components/Header'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Footer from '../../components/Footer'
import styles from './Profile.module.css'
import Favorites from '../../components/Favorites'

const USER_DATA = 'userData'

const Profile = () => {
	const { register, handleSubmit, setValue } = useForm()

	useEffect(() => {
		try {
			const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {}
			setValue('name', userData.name)
			setValue('email', userData.email)
		} catch (error) {
			console.error(error)
		}
	}, [])

	const handleFormSubmit = (data) => {
		localStorage.setItem(USER_DATA, JSON.stringify(data))
		try {
			const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {}
			alert('Data saved successfully')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Header />
			<div className={styles.profile}>
				<div className={styles.split}>
					<div className={styles.side}>
						<form
							className={styles.profileForm}
							onSubmit={handleSubmit(handleFormSubmit)}
						>
							<h2 className="headline">Profile</h2>
							<label htmlFor="name">
								<input
									type="text"
									id="name"
									placeholder="Name"
									{...register('name', { required: true })}
								/>
							</label>
							<label htmlFor="email">
								<input
									type="email"
									id="email"
									placeholder="Email"
									{...register('email', { required: true })}
								/>
							</label>
							<button type="submit">Save</button>
						</form>
					</div>
					<div className={styles.side}>
						<Favorites />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Profile
