import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import StartMenu from './components/start-menu/StartMenu'
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import ImageViewer from './components/imageViewer/ImageViewer';
import AudioListener from './components/audioListener/AudioListener';
import Run from './components/Run/Run'
import Logoff from "./components/LogOff/Logoff";

function App() {

  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [logoff, setLogoff] = useState(false);

  return (
    <>
      <Navbar onHoverChange={setIsNavbarHovered} />
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
      <Run isRunning={isRunning} />
      {logoff && <Logoff setLogoff={setLogoff} />}
    </>
  )
}

export default App
