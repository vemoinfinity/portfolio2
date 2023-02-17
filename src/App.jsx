import { Container } from 'react-bootstrap'
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
function App() {
  const isLoading = useSelector(state => state.isLoading)
  const setTime=setTimeout(() => {
    isLoading(true);
      },5000)
  return (
    <HashRouter>
      <Navigator/>
      {isLoading && <LoadingScreen />}
      <Container className='mt-5 pt-5'>
      <Routes>
      <Route path='/' onClick={setTime} element={<Home/>}/>
      <Route path='/abilities' element={<Abilities/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      </Container>
      <FooterMenu/>
    </HashRouter>
  )
}

export default App
