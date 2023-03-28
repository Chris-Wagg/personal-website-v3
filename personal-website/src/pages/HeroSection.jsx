export default function HeroSection() {
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
			<section className="main-container">
				<div className="text-container">
					<p className="text-green">Hi, I'm...</p>
					<h1>Chris Wagg - </h1>
					<h2>Aspiring web developer</h2>
					<p>
						Thanks for checking out my website! It's not much, but it's honest
						work.
					</p>
					<p>
						I am a front end web developer with a background in hospitality who
						enjoyes problem solving, teaching and developing leadership skills.
					</p>
					<p>
						I find my passion for tech in the front end, specifically in UI
						design and implementation.
					</p>
					<p>Check out some of my stuff down below!</p>
				</div>
			</section>
		</>
	)
}
