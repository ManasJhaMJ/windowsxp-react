import { Analytics } from "@vercel/analytics/react"
import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import StartMenu from './components/start-menu/StartMenu'
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import ImageViewer from './components/imageViewer/ImageViewer';
import AudioListener from './components/audioListener/AudioListener';
import Run from './components/Run/Run'
import Logoff from "./components/LogOff/Logoff";
import TextViewer from "./components/TextViewer/TextViewer";

import logo from './assets/windows69.webp'
import startgithub from './assets/stargithub.svg'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [logoff, setLogoff] = useState(false);
  const [showTextViewer, setShowTextViewer] = useState(false);
  const [clickCount, setClickCount] = useState(0);


  const handleNavbarButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDocumentClick = (event) => {
    if (isMenuOpen && !event.target.closest('.avoid-close')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMenuOpen]);

  const handleRunEvent = () => {
    if (clickCount === 0) {
      setIsRunning(true);
    } else {
      alert("The shadow is gone. 🏃💨 Legends say the shadow is still running... (Refresh to see him again)");
    }
    setClickCount(1);
  };

  return (
    <>

      <div className="splash-screen">
        <img src={logo} alt="windows 69 logo" />
        <h1>Windows 69</h1>
        <h2>Make sure you turn the volume up!</h2>
        <p>Headphones recommended for better experience</p>
      </div>

      <a className="star-github" target="_blank" href="https://github.com/ManasJhaMJ/windowsxp-react"><img src={startgithub} alt="Star On github" /></a>

      <Navbar onClickChange={handleNavbarButtonClick} setShowTextViewer={setShowTextViewer} />

      {isMenuOpen ? <StartMenu
        setShowVideoPlayer={setShowVideoPlayer}
        setShowImageViewer={setShowImageViewer}
        setShowAudioPlayer={setShowAudioPlayer}
        setIsRunning={setIsRunning}
        setClickCount={handleRunEvent}
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
