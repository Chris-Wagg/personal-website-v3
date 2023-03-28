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
			<section className="secondary-container" id="scroll-target-about">
				<h1 className="title-text">About me</h1>
				<div className="text-container">
					<p>
						Hey! I'm Chris and I want to build stuff for the internet. My
						journey to become a developer started in 2021 when I started looking
						into deveopment for something new and fun to do. Various online
						courses, a bootcamp, moving to the other side of the world and
						working a full time job later, here I am trying to chase my dream.
					</p>
					<p>
						I have learnt a whole lot about the big wide world of coding over
						the last few years and am excited to bring that to a job and
						continue to learn and show what I can do!
					</p>
					<p>
						Some of the tech I have worked with...
						<ul>
							<li>React</li>
							<li>MUI</li>
							<li>Next.js</li>
							{/* <li>Prisma</li> */}
						</ul>
					</p>
				</div>
			</section>
		</>
	)
}
