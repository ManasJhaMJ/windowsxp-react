import { useState, useEffect } from 'react'
import start from '../../assets/start.webp'

function Navbar({ setShowTextViewer, onClickChange }) {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <nav>
      <button className="start-col avoid-close"
        onClick={onClickChange}
      >
        <img className="start-img" src={start} alt="" />
        <p className="start">Start</p>
      </button>

      <div className="nav">
        <div className="tabs">
          <div className="tab-inner" onClick={() => setShowTextViewer(true)}>
            <img className="tab-icons" src="https://www.manasjha.me/windows-xp/images/icons/facebook.png" alt="" />
            <h4>Read About me</h4>
          </div>
          <div className="tab-inner" onClick={() => setShowTextViewer(true)}>
            <img className="tab-icons" src="https://www.manasjha.me/windows-xp/images/icons/tweetdeck.png" alt="" />
            <h4>See my Projects</h4>
          </div>
          <div className="tab-inner" onClick={() => setShowTextViewer(true)}>
            <img className="tab-icons" src="https://www.manasjha.me/windows-xp/images/icons/outlook.png" alt="" />
            <h4>Contact Me</h4>
          </div>
        </div>
        <div className="time">
          <p><img className='icons' src='https://www.manasjha.me/windows-xp/images/icons/computer.png' /></p>
          <p>{date.toLocaleTimeString()}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar