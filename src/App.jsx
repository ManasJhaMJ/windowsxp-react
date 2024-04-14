import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import StartMenu from './components/start-menu/StartMenu'
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import ImageViewer from './components/imageViewer/ImageViewer';
import AudioListener from './components/audioListener/AudioListener';

function App() {

  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  return (
    <>
      <Navbar onHoverChange={setIsNavbarHovered} />
      {isNavbarHovered || isMenuHovered ? <StartMenu onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}
        setShowVideoPlayer={setShowVideoPlayer}
        setShowImageViewer={setShowImageViewer}
        setShowAudioPlayer={setShowAudioPlayer}
      /> : null}
      {showVideoPlayer && <VideoPlayer setShowVideoPlayer={setShowVideoPlayer} />}
      {showImageViewer && <ImageViewer setShowImageViewer={setShowImageViewer} />}
      {showAudioPlayer && <AudioListener setShowAudioPlayer={setShowAudioPlayer} />}
    </>
  )
}

export default App
