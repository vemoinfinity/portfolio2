import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterMenu from './components/FooterMenu'

import LoadingScreen from './components/LoadingScreen'
import Navigator from './components/Navigator'
import Abilities from './pages/Abilities'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { useEffect, useState } from 'react'
function App() {
  const isLoading = useSelector(state => state.isLoading)
  const setTime=setTimeout(() => {
    isLoading(true);
      },5000)
      const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <HashRouter>
      <Navigator darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {isLoading && <LoadingScreen />}
      <div className='pt-5 bg-gradient-to-r from-sky-300 via-sky-500 dark:to-blue-800 '>
      <Routes>
      <Route path='/' onClick={setTime} element={<Home/>}/>
      <Route path='/abilities' element={<Abilities/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      </div>
      <FooterMenu/>
    </HashRouter>
  )
}

export default App
