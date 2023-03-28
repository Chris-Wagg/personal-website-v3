export default function EXperienceCard(props) {
	const { experienceName, experienceDate, aboutExperience, experienceTech } =
		props
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
