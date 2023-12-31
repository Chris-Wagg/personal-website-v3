import { motion } from 'framer-motion'

export default function HeroSection() {
	return (
		<>
			<section className='main-container' id='scroll-top-target'>
				<div className='text-container'>
					<motion.div
						initial={{ opacity: 0, translateY: +100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 0.6 }}>
						<p className='text-green'>Hi, I'm...</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: +100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 0.7 }}>
						<h1>Chris Wagg - </h1>
						<h2>Aspiring web developer</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: +100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 1 }}>
						<p>
							Thanks for checking out my website! It's not much,
							but it's honest work.
						</p>
						<p>
							I am a front end web developer with a background in
							hospitality who enjoyes problem solving, teaching
							and developing leadership skills.
						</p>
						<p>
							I find my passion for tech in the front end,
							specifically in UI design and implementation.
						</p>
						<p>Check out some of my stuff down below!</p>
					</motion.div>
				</div>
			</section>
		</>
	)
}
