function AudioListener({ setShowAudioPlayer }) {
    return (
        <div id="program">
            <div className="top-bar">
                <div className="app-name">
                    <img className="app-icon" src="https://res.cloudinary.com/penry/image/upload//w_40,h_40,c_lpad/v1474990234/cd_audio_cd_mcloiq.png" />
                    <h4>Audio Player (volume up)</h4>
                </div>
                <div className="button-grp">
                    <img onClick={() => setShowAudioPlayer(false)} className="app-icon" src="https://www.manasjha.me/windows-xp/images/icons/cross.png" alt="" />
                </div>
            </div>
            <div className="video">
                <iframe width="1800" height="900" src="https://www.youtube.com/embed/NdpsU-gLPKU?loop=1&autoplay=1&fs=0&controls=0&modestbranding=1&rel=0" title="Super windows error meme || windows69.vercel.app" allow="autoplay;gyroscope;"></iframe>
            </div>
        </div>
    )
}

export default AudioListener