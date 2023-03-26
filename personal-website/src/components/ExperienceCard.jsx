export default function EXperienceCard(props) {
	const { experienceName, experienceDate, aboutExperience, experienceTech } =
		props
	return (
		<div className="experience-card-container">
			<div className="experience-name">{experienceName}</div>
			<div className="experience-date">{experienceDate}</div>
			<div className="about-experience">{aboutExperience}</div>
			{/* <div className="experience-tech-list"> - {experienceTech}</div> */}
		</div>
	)
}
