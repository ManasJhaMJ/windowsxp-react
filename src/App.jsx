import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import StartMenu from './components/start-menu/StartMenu'
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import ImageViewer from './components/imageViewer/ImageViewer';
import AudioListener from './components/audioListener/AudioListener';
import Run from './components/Run/Run'
import Logoff from "./components/LogOff/Logoff";
import TextViewer from "./components/TextViewer/TextViewer";

import logo from './assets/windows69.webp'

function App() {

  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [logoff, setLogoff] = useState(false);
  const [showTextViewer, setShowTextViewer] = useState(false);

  return (
    <>

      <div className="splash-screen">
        <img src={logo} alt="windows 69 logo" />
        <h1>Windows 69</h1>
        <h2>Make sure you turn the volume up!</h2>
        <p>Headphones recommended for better experience</p>
      </div>

      <Navbar onHoverChange={setIsNavbarHovered} setShowTextViewer={setShowTextViewer} />

      {isNavbarHovered || isMenuHovered ? <StartMenu onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}
        setShowVideoPlayer={setShowVideoPlayer}
        setShowImageViewer={setShowImageViewer}
        setShowAudioPlayer={setShowAudioPlayer}
        setIsRunning={setIsRunning}
        setLogoff={setLogoff}
      /> : null}

      {showVideoPlayer && <VideoPlayer setShowVideoPlayer={setShowVideoPlayer} />}
      {showImageViewer && <ImageViewer setShowImageViewer={setShowImageViewer} />}
      {showAudioPlayer && <AudioListener setShowAudioPlayer={setShowAudioPlayer} />}
      {showTextViewer && <TextViewer setShowTextViewer={setShowTextViewer} />}
      <Run isRunning={isRunning} />
      {logoff && <Logoff setLogoff={setLogoff} />}
    </>
  )
}

export default App
