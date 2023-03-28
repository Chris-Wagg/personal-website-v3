import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './pages/HeroSection'
import NavBar from './components/NavBar'
import './App.css'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

function App() {
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
			<NavBar />
			<HeroSection className="hidden" />
			<AboutMe className="hidden" />
			<Projects className="hidden" />
			<Experience className="hidden" />
		</>
	)
}

export default App
