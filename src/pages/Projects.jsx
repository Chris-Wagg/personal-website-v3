import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
	return (
		<section className='secondary-container' id='scroll-target-projects'>
			<motion.div
				initial={{ opacity: 0, translateX: -100 }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{ duration: 0.6 }}>
				<h1 className='title-text'>Projects</h1>
			</motion.div>

			<motion.div
				className='project-cards-container'
				initial={{ opacity: 0, translateX: -100 }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{ duration: 1 }}>
				<ProjectCard
					projectName='Frontend Mentor Projects'
					aboutProject='A series of projects found on Frontend Mentor. A great site for practicing front end dev fundamentals while working on portfoli projects. Really handy for getting some good learning and fun projects under your belt'
					projectTech='Next.js, HTML, CSS, JS, API'
					liveLink='https://www.frontendmentor.io/profile/Chris-Wagg'
					githubLink='https://github.com/orgs/Chris-Wagg-Frontend-Mentor-Projects/repositories'
				/>
				<ProjectCard
					projectName='M.E. Travel'
					aboutProject='A self directed project to copy a full single page app with a focus on accessability and responsivity. Originally built with Typescrit and Tailwind, I reverted to CSS3 feeling it reduced bloat in my html and was generally easier for me to work with.'
					projectTech='Next.js, CSS'
					liveLink='https://chris-wagg.github.io/travel-v2/'
					githubLink='https://github.com/Chris-Wagg/travel-v2'
				/>
				<ProjectCard
					projectName='KIND'
					aboutProject='The final project of my coding bootcamp that was built with 4 others
									in a little under a week. I was responsible for all the UI design
									and development.'
					projectTech='React, MUI'
					liveLink='https://kind-manaia.herokuapp.com'
					githubLink='https://github.com/manaia-2021/KIND'
				/>
				<ProjectCard
					projectName='TOP Sign up form'
					aboutProject='A project using flex-box with a little bit of grid. This project focused on forms and input validation. The other branch of this project includes the Constraint Validation API to validate all the inputs as the user interacts with them.'
					projectTech='HTML, CSS'
					liveLink='https://chris-wagg.github.io/TOP-sign-up-form/'
					githubLink='https://github.com/Chris-Wagg/TOP-sign-up-form'
				/>
				<ProjectCard
					projectName='TOP Admin Dashboard'
					aboutProject='A challenge from The Odin Project using both flex and grid concepts together to create a flexible and dynamic page with multiple elements'
					projectTech='HTML, CSS'
					liveLink='https://chris-wagg.github.io/TOP-Admin-Dashboard/'
					githubLink='https://github.com/Chris-Wagg/TOP-Admin-Dashboard'
				/>
				<ProjectCard
					projectName='Top Landing page'
					aboutProject='Another Odin Project challenge to put multiple flexbox concepts together to make one webpage.'
					projectTech='HTML, CSS'
					liveLink='https://chris-wagg.github.io/TOP-landing-page/'
					githubLink='https://github.com/Chris-Wagg/TOP-landing-page'
				/>
			</motion.div>
		</section>
	)
}
