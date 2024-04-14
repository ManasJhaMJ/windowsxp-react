function VideoPlayer() {
    return (
        <div id="program">
            <div className="top-bar">
                <div className="app-name">
                    <img className="app-icon" src="https://res.cloudinary.com/penry/image/upload/c_lpad,g_center,r_0,w_65/v1474990261/media_player_file_sqjlgm.png" />
                    <h4>Video Player</h4>
                </div>
                <div className="button-grp">
                    <img className="app-icon" src="https://www.manasjha.me/windows-xp/images/icons/cross.png" alt="" />
                </div>
            </div>
            <div className="video">
                <iframe width="1800" height="900" src="https://www.youtube.com/embed/8WFjE-a--PA?autoplay=1&rel=0" title="Super windows error meme || windows69.vercel.app" allow="autoplay; ; gyroscope;" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        </div>
    )
}

export default VideoPlayer