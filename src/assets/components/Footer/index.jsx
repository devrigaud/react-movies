import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				Made by{' '}
				<a href="https://github.com/benrigaud" target="_blank">
					Ben
				</a>
			</p>
		</footer>
	)
}

export default Footer
