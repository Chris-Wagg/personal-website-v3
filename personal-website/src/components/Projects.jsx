import ProjectCard from './ProjectCard'

// const { projectName, aboutProject, projectTech, projectLink } = props

export default function Projects() {
	return (
		<div className="projects-container">
			<section className="projects">
				<ProjectCard
					projectName="KIND"
					aboutProject="The final project of my coding bootcamp that was built with 4 others
                    in a little under a week. I was responsible for all the UI design
                    and development"
					projectTech="React, MUI"
					projectLink="https://github.com/manaia-2021/KIND"
				/>
			</section>
		</div>
	)
}

{
	/* <ProjectCard
					projectName=""
					aboutProject=""
					projectTech=""
					projectLink=""
				/> */
}
