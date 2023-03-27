import ExperienceCard from '../components/ExperienceCard'

export default function Experience() {
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
		<div className="experience-container" id="scroll-target-experience">
			<div className="main-text-blue unskew hidden">Experience</div>
			<section className="experience hidden">
				<ExperienceCard
					experienceName="Enspiral Dev Academy (EDA)"
					experienceDate="Jul 2021 - Oct 2021"
					aboutExperience="A 16 week bootcamp learning modern tech stacks with a focus on hands-on learning and project driven work using agile methods. Human skills were also a big focus. 
                    "
					experienceTech=""
				/>
				<ExperienceCard
					experienceName="Udemy Javascript course"
					experienceDate="Oct 2021 - Mar 2022"
					aboutExperience="A Javascript course focused on fundamentals and DOM manipulation. I spend a number of months working my way through this in my spare time,  "
					experienceTech=""
				/>
				<ExperienceCard
					experienceName="The Odin Project (TOP)"
					experienceDate="Mar 2022 - Current"
					aboutExperience="An open source fullstack course that focuses on deep understanding of fundamentals in HTML, CSS, JS, testing, React or Ruby. I am currently working my way through the content in my spare time, with a focus on front end aspects. "
					experienceTech=""
				/>
			</section>
		</div>
	)
}

// experienceName, aboutExperience, experienceTech
