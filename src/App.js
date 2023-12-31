import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './pages/HeroSection'
import NavBar from './components/NavBar'
import './App.css'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

function App() {
	return (
		<>
			<NavBar />

			<HeroSection />
			<AboutMe />
			<Projects />
			<Experience />
		</>
	)
}

export default App
