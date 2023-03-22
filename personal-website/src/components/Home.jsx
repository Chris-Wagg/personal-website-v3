export default function Home() {
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
			<section className="intro-content">
				<div className="hidden">
					<h1 className="main-text">Chris Wagg - Aspiting web developer</h1>
					<h2 className="secondary-text">
						<div>
							Thanks for checking out my website. It's not much, but it's honest
							work.
						</div>
						<div>
							I am a front end web developer with a background in hospitality
							who enjoyes problem solving, teaching and developing leadership
							skills.
						</div>
						<div>
							I find my passion for tech in the front end, specifically in UI
							design and implementation. I have always tended toward more
							creative outlets that have a degree of skill and find coding to be
							the perfect mix for me. I love seeing how a page slowly comes
							together and tweaking those small details to make it extra
							special.
						</div>
						<div>Check out some of my stuff down below!</div>
					</h2>
				</div>
			</section>
		</>
	)
}
