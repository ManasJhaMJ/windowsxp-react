function TextViewer({ setShowTextViewer }) {
    return (
        <div id="program">
            <div className="top-bar">
                <div className="app-name">
                    <img className="app-icon" src="https://res.cloudinary.com/penry/image/upload/w_65,h_65,c_lpad/v1474990246/directory_pictures_ualddt.png" />
                    <h4>Text Viewer (scroll to read more) </h4>
                </div>
                <div className="button-grp">
                    <img onClick={() => setShowTextViewer(false)} className="app-icon" src="https://www.manasjha.me/windows-xp/images/icons/cross.png" alt="" />
                </div>
            </div>
            <div className="text">
                <h1>Developed by Manas Jha</h1>
                <h2>I am a Developer and Designer</h2>
                <h3>Windows 69 for the Win ! <br />I hope you like it !</h3>
                <p>
                    I designed this website to showcase my skills in web development and design.
                    I was learning react and thought of this project to learn state management and other concepts in react.
                    Do let me know how you feel about this project. I would love to hear from you.
                    You can contact me through the socials below. I am just a DM away!
                </p>
                <div className="socials">
                    <h4>Connect with me</h4>
                    <a target="_blank" href="https://www.linkedin.com/in/notmanasjha/">LinkedIn</a>
                    <a target="_blank" href="https://twitter.com/ManasJhaMJ">Twitter</a>
                    <a target="_blank" href="https://github.com/ManasJhaMJ">Github</a>
                    <a target="_blank" href="https://discord.com/users/916896085212033024">Discord</a>
                    <a target="_blank" href="https://www.instagram.com/notmanasjha/">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default TextViewer