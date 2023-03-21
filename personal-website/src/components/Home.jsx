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
			<div className="container-one">
				<div className="hidden">
					<div className="container-one-main-content">
						<div className="main-text">Aspiring Web Developer!</div>
						<div className="secondary-text">
							Thanks for checking out my website. It's not much, but it's honest
							work.
						</div>
						<div className="secondary-text">
							I am a front end web developer with a background in hospitality
							who enjoyes problem solving, teaching and developing leadership
							skills.
						</div>
						<div className="secondary-text">
							I find my passion for tech in the front end, specifically in UI
							design and implementation. I have always tended toward more
							creative outlets that have a degree of skill and find coding to be
							the perfect mix for me. I love seeing how a page slowly comes
							together and tweaking those small details to make it extra
							special.
						</div>
						<div className="secondary-text">
							Check out some of my stuff down below!
						</div>
					</div>
				</div>
			</div>
			<div class="container-two">
				<section class="hidden">
					<div class="main-text">
						<div className="main-text-blue">some random information</div>
					</div>
					<div class="box-container">
						<div class="image-box">
							<div class="image-container"></div>
							<div class="secondary-text">this is the image subtext</div>
						</div>
						<div class="image-box">
							<div class="image-container"></div>
							<div class="secondary-text">this is the image subtext</div>
						</div>
						<div class="image-box">
							<div class="image-container"></div>
							<div class="secondary-text">this is the image subtext</div>
						</div>
						<div class="image-box">
							<div class="image-container"></div>
							<div class="secondary-text">this is the image subtext</div>
						</div>
					</div>
				</section>
			</div>

			<div class="container-three">
				<section class="hidden">
					<div class="secondary-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex ex,
						convallis id est non, fermentum consequat enim. Morbi fringilla nibh
						non leo feugiat, vel sagittis risus suscipit. Ut luctus mauris
						mauris, quis ullamcorper eros suscipit sit amet. Suspendisse id sem
						aliquet, tincidunt ipsum at, molestie erat. Fusce dignissim lorem
						sed quam commodo, vel cursus risus tempor. Nullam vitae est nibh.
						Sed eu tincidunt nunc.
					</div>
					<div class="secondary-text right">- Abe Lincon</div>
				</section>
			</div>

			<div class="outer-container">
				<section class="hidden">
					<div class="inner-container">
						<div class="left-content">
							<div class="main-text">This is a call to action</div>
							<div class="secondary-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<button>button</button>
					</div>
				</section>
			</div>
			<div class="footer">footer here</div>
		</>
	)
}
