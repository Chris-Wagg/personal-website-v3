export default function AboutMe() {
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
		<>
			<section className="about-me-container" id="scroll-target">
				<div className="hidden">
					<div className="about-me-text hidden" id="about-me-text-div">
						<h1>About me</h1>
						<div>
							Hey! I'm Chris and I want to build stuff for the internet. My
							journey to become a developer started in 2021 when I started
							looking into deveopment for something new and fun to do.
						</div>

						<div>
							Various online courses, a bootcamp, moving to the other side of
							the world and working a full time job later, here I am trying to
							chase my dream.
						</div>
						<div>
							I have learnt a whole lot about the big wide world of coding over
							the last few years and am excited to bring that to a job and
							continue to learn and show what I can do!
						</div>
						<div>Check out some of my projects below!</div>
					</div>
					<div className="tech-list">
						Some of the tech I have worked with...
						<div className="tech-list-items">
							<ul>
								<li>React</li>
								{/* <li>Tailwind</li> */}
								<li>MUI</li>
								<li>Next.js</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
