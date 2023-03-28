export default function ExperienceCard(props) {
	const { experienceName, experienceDate, aboutExperience } = props

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
