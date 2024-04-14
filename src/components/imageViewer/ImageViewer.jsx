import Image from '../../assets/image.png'

function ImageViewer({ setShowImageViewer }) {
    return (
        <div id="program">
            <div className="top-bar">
                <div className="app-name">
                    <img className="app-icon" src="https://res.cloudinary.com/penry/image/upload/w_65,h_65,c_lpad/v1474990246/directory_pictures_ualddt.png" />
                    <h4>Image Viewer (scroll to view) </h4>
                </div>
                <div className="button-grp">
                    <img onClick={() => setShowImageViewer(false)} className="app-icon" src="https://www.manasjha.me/windows-xp/images/icons/cross.png" alt="" />
                </div>
            </div>
            <div className="video">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}

export default ImageViewer