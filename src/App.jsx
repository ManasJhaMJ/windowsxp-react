import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import StartMenu from './components/start-menu/StartMenu'

function App() {

  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  return (
    <>
      <Navbar onHoverChange={setIsNavbarHovered} />
      {isNavbarHovered || isMenuHovered ? <StartMenu onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)} /> : null}
    </>
  )
}

export default App
