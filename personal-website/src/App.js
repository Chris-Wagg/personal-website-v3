import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import './App.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<AboutMe />
			<Projects />
		</>
		// <BrowserRouter>
		// 	<NavBar />
		// 	<Routes>
		// 		<Route path="/" element={<Home />} />
		// 	</Routes>
		// </BrowserRouter>
	)
}

export default App
