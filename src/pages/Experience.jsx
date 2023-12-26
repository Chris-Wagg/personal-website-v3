import ExperienceCard from '../components/ExperienceCard'

export default function Experience() {
	return (
		<section className='secondary-container' id='scroll-target-experience'>
			<h1 className='title-text'>Experience</h1>
			<div className='experience-cards-container'>
				<ExperienceCard
					experienceName='Frontend Mentor'
					experienceDate='Dec 2023 - Current'
					aboutExperience={`Frontend Mentor provides a series of component and single page projects commonly fount in front end development projects. The small project based tasks are a great way to practice skills while adding items to your portfolio.`}
				/>
				<ExperienceCard
					experienceName='The Odin Project (TOP)'
					experienceDate='Mar 2022 - Current'
					aboutExperience={`An open source fullstack course that focuses on deep understanding of fundamentals in HTML, CSS, JS, testing and React. I am currently working my way through the content in my spare time, with a focus on front end aspects. This is great project driven work that allows you to go through the sections you want to learn without feeling like you are missing huge chucks from other sections`}
				/>

				<ExperienceCard
					experienceName='Udemy Javascript course'
					experienceDate='Oct 2021 - Mar 2022'
					aboutExperience={`A Javascript course focused on JS fundamentals and DOM manipulation. I spent a couple of months working through some of this content before moving onto The Odin Project`}
				/>
				<ExperienceCard
					experienceName='Enspiral Dev Academy (EDA)'
					experienceDate='Jul 2021 - Oct 2021'
					aboutExperience={`A 16 week bootcamp learning modern tech stacks (React, Node, Jest, Redux, SQL) with a focus on hands-on learning and project driven work using agile methods. Another focus of this course was the human/ soft skills needed to be able to work with others. It taught a lot about giving and recieving feedback and learning how to learn`}
				/>
			</div>
		</section>
	)
}

// experienceName, aboutExperience, experienceTech
