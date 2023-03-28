export default function EXperienceCard(props) {
	const { experienceName, experienceDate, aboutExperience, experienceTech } =
		props
	return (
		<div className="experience-card-container">
			<p>{experienceName}</p>
			<p className="experience-date">{experienceDate}</p>
			<p className="about-experience">{aboutExperience}</p>
			{/* <div className="experience-tech-list"> - {experienceTech}</div> */}
		</div>
	)
}
