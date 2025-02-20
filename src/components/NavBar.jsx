export default function NavBar() {
	function scrollAbout() {
		document.getElementById('scroll-target-about').scrollIntoView()
	}
	function scrollProjects() {
		document.getElementById('scroll-target-projects').scrollIntoView()
	}
	function scrollExperience() {
		document.getElementById('scroll-target-experience').scrollIntoView()
	}
	function scrollTop() {
		document.getElementById('scroll-top-target').scrollIntoView()
	}
	// fix jerky scrolling with css scroll behaviour class on html
	return (
		<>
			<div class="nav">
				<section class="nav-text">
					<button onClick={scrollTop}>Chris Wagg</button>
				</section>
				<section class="nav-links">
					<input type="checkbox" id="check" />
					<label htmlFor="check" className="check-button text-green">
						...
					</label>
					<div>
						<button onClick={scrollAbout}>About me</button>
						<button onClick={scrollProjects}>Projects</button>
						<button onClick={scrollExperience}>Experience</button>
					</div>
					<div>
						<button>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/Chris-Wagg"
							>
								Github
							</a>
						</button>
						<button>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/chriswagg"
							>
								Linkedin
							</a>
						</button>
						<button>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="Chris Wagg CV.docx.pdf"
								download
							>
								My resume
							</a>
						</button>
					</div>
				</section>
			</div>
		</>
	)
}
