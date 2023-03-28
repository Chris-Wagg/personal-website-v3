import ProjectCard from '../components/ProjectCard'

export default function Projects() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show')
			} else {
				entry.target.classList.remove('show')
			}
		})
	})

	const hiddenElements = document.querySelectorAll('.hidden')
	hiddenElements.forEach((el) => observer.observe(el))

	return (
		<section className="secondary-container" id="scroll-target-projects">
			<h1 className="title-text">Projects</h1>
			<div className="cards-container">
				<ProjectCard
					projectName="KIND"
					aboutProject="The final project of my coding bootcamp that was built with 4 others
									in a little under a week. I was responsible for all the UI design
									and development"
					projectTech="React, MUI"
					liveLink="https://kind-manaia.herokuapp.com"
					githubLink="https://github.com/manaia-2021/KIND"
				/>
				<ProjectCard
					projectName="TOP Sign up form"
					aboutProject="A project using flex-box with a little bit of grid. This project focused on forms and input validation. The other branch of this project includes the Constraint Validation API to validate all the inputs as the user interacts with them."
					projectTech="HTML, CSS"
					liveLink="https://chris-wagg.github.io/TOP-sign-up-form/"
					githubLink="https://github.com/Chris-Wagg/TOP-sign-up-form"
				/>
				<ProjectCard
					projectName="TOP Admin Dashboard"
					aboutProject="A challenge from The Odin Project using both flex and grid concepts together to create a flexible and dynamic page with multiple elements"
					projectTech="HTML, CSS"
					liveLink="https://chris-wagg.github.io/TOP-Admin-Dashboard/"
					githubLink="https://github.com/Chris-Wagg/TOP-Admin-Dashboard"
				/>
				<ProjectCard
					projectName="Top Landing page"
					aboutProject="Another Odin Project challenge to put multiple flexbox concepts together to make one webpage."
					projectTech="HTML, CSS"
					liveLink="https://chris-wagg.github.io/TOP-landing-page/"
					githubLink="https://github.com/Chris-Wagg/TOP-landing-page"
				/>
			</div>
		</section>
	)
}
