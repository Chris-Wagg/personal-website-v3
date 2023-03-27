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

	function scrollTrigger() {
		document.getElementById('scroll-target').scrollIntoView()
	}
	// fix jerky scrolling with css scroll behaviour class on html

	return (
		<>
			<section className="intro-content-container">
				<div className="hidden">
					<div className="intro-text">
						<div className="secondary-text-green">Hi, I'm...</div>
						<h1 className="main-text">Chris Wagg - Aspiring web developer</h1>
						<div className="secondary-text">
							Thanks for checking out my website! It's not much, but it's honest
							work.
						</div>
						<div className="secondary-text">
							I am a front end web developer with a background in hospitality
							who enjoyes problem solving, teaching and developing leadership
							skills.
						</div>
						<div className="secondary-text">
							I find my passion for tech in the front end, specifically in UI
							design and implementation.
						</div>
						<div className="secondary-text">
							Check out some of my stuff down below!
						</div>
						<button className="scolling-button" onClick={scrollTrigger}>
							click me!
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
