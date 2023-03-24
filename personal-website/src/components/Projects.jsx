export default function Projects() {
	return (
		<div className="projects-container">
			<section className="projects">
				<div className="project-card-container">
					<div className="icon"></div>
					<div className="project-name">KIND</div>
					<div className="about-project">
						The final project of my coding bootcamp that was built with 4 others
						in a little under a week. I was responsible for all the UI design
						and development
					</div>
					<div className="project-tech-list"> - React, MUI</div>
					<button className="project-link">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/manaia-2021/KIND"
						>
							Check it out!
						</a>
					</button>
				</div>
			</section>
		</div>
	)
}
