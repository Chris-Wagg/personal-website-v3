export default function ProjectCard(props) {
	const { projectName, aboutProject, projectTech, projectLink } = props
	return (
		<div className="project-card-container">
			<div className="icon"></div>
			<div className="project-name">{projectName}</div>
			<div className="about-project">{aboutProject}</div>
			<div className="project-tech-list"> - {projectTech}</div>
			<button className="project-link">
				<a target="_blank" rel="noopener noreferrer" href={projectLink}>
					Check it out!
				</a>
			</button>
		</div>
	)
}
