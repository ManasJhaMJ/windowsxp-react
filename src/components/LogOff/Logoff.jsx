function Logoff({ setLogoff }) {
    return (
        <div id="program">
            <div className="top-bar">
                <div className="app-name">
                    <img className="app-icon" src="https://res.cloudinary.com/penry/image/upload/c_lpad,g_center,r_0,w_65/v1474990261/media_player_file_sqjlgm.png" />
                    <h4 style={{ color: "red" }} >LOGGING OFF (Volume up) </h4>
                </div>
                <div className="button-grp">
                    <img onClick={() => setLogoff(false)} className="app-icon" src="https://www.manasjha.me/windows-xp/images/icons/cross.png" alt="" />
                </div>
            </div>
            <div className="video">
                <iframe width="1800" height="900" src="https://www.youtube.com/embed/6NG_UwVQqlc?loop=1&autoplay=1&fs=0&controls=0&modestbranding=1&rel=0" title="Super windows error meme || windows69.vercel.app" allow="autoplay;gyroscope;"></iframe>
            </div>
        </div>
    )
}

export default Logoff