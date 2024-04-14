import { useState, useEffect } from 'react'

function Navbar({onHoverChange}) {

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
        <button className="start-col" 
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
        >
            <img className="start-img" src="http://opi.wiki/pic?w=6&f=108883&e=2&o=703" alt="" />
            <p className="start">Start</p>
        </button>

        <div className="nav">
            <div className="tabs">
                <a className="tab-inner" href="./index.html">
                    <img className="tab-icons" src="https://www.manasjha.me/windows-xp/images/icons/facebook.png" alt="" />
                    <h4>Read About me</h4>
                </a>
                <a className="tab-inner" href="./index.html">
                    <img className="tab-icons" src="https://www.manasjha.me/windows-xp/images/icons/tweetdeck.png" alt="" />
                    <h4>See my Projects</h4>
                </a>
                <a className="tab-inner" href="./index.html">
                    <img className="tab-icons" src="https://www.manasjha.me/windows-xp/images/icons/outlook.png" alt="" />
                    <h4>Contact Me</h4>
                </a>
            </div>
            <div className="time">
                <p><img className='icons' src='https://www.manasjha.me/windows-xp/images/icons/computer.png'/></p>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar