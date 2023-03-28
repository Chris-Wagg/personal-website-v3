export default function ExperienceCard(props) {
	const { experienceName, experienceDate, aboutExperience } = props

	// const button = document.getElementById('summary-button')
	// const text = document.getElementById('summary-text')
	// const textFade = () => console.log(text)
	// button.addEventListener('onClick', textFade)

	return (
		<div className="experience-card-container">
			<p className="card-title">{experienceName}</p>
			<p className="text-green">{experienceDate}</p>
			<details>
				<summary></summary>
				<p>{aboutExperience}</p>
			</details>
		</div>
	)
}
