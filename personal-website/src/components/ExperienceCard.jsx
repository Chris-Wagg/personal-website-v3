export default function EXperienceCard(props) {
	const { experienceName, aboutExperience, experienceTech } = props
	return (
		<div className="experience-card-container">
			<div className="icon"></div>
			<div className="experience-name">{experienceName}</div>
			<div className="about-experience">{aboutExperience}</div>
			<div className="experience-tech-list"> - {experienceTech}</div>
		</div>
	)
}
