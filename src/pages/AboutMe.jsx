import { motion } from 'framer-motion'

export default function AboutMe() {
	return (
		<>
			<section className='secondary-container ' id='scroll-target-about'>
				<motion.div
					initial={{ opacity: 0, translateY: +100 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className='title-text'>About me</h1>
				</motion.div>

				<div className='text-container'>
					<motion.div
						initial={{ opacity: 0, translateY: +100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 0.7 }}>
						<p>
							Hey! I'm Chris and I want to build stuff for the
							internet. My journey to become a developer started
							in 2021 when I started looking into deveopment for
							something new and fun to do. Various online courses,
							a bootcamp, moving to the other side of the world
							and working a full time job later, here I am trying
							to chase my dream.
						</p>
						<p>
							I have learnt a whole lot about the big wide world
							of coding over the last few years and am excited to
							bring that to a job and continue to learn and show
							what I can do!
						</p>
						<p>
							Some of the tech I have worked with...
							<motion.div
								initial={{ opacity: 0, translateY: +100 }}
								whileInView={{ opacity: 1, translateY: 0 }}
								transition={{ duration: 1 }}>
								<ul>
									<li>React</li>
									<li>MUI</li>
									<li>Next.js</li>
									<li>Prisma</li>
									<li>Tailwind</li>
								</ul>
							</motion.div>
						</p>
					</motion.div>
				</div>
			</section>
		</>
	)
}
