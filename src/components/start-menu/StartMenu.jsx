import { useState } from "react"
import Option from "./Option"
import OptionMore from "./OptionMore"

function StartMenu({ onMouseEnter, onMouseLeave, setShowVideoPlayer, setShowImageViewer, setShowAudioPlayer, setIsRunning, setLogoff }) {

    const [isExplorerClicked, setIsExplorerClicked] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleRunEvent = () => {
        if (clickCount === 0) {
            setIsRunning(true);
        } else {
            alert("The Shadow is gone. 🏃💨 Legends say the shadow is still running...");
        }
        setClickCount(clickCount + 1);
    };

    return (
        <>
            <div id='startMenu' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className='inner-start'>

                    <Option src="data:image/png;base64,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"
                        app='Internet Explorer'
                        click={() => {
                            setIsExplorerClicked(!isExplorerClicked);
                            alert('Explorer is ded. Get a life.');
                        }}
                    />

                    <OptionMore src1="https://res.cloudinary.com/penry/image/upload/w_65,h_65,c_lpad/v1474990246/directory_pictures_ualddt.png"
                        app1="Photos"
                        src2="https://res.cloudinary.com/penry/image/upload/q_100/v1474990272/pictures_bt9tfg.ico"
                        app2='huehuehue.png'
                        click={() => setShowImageViewer(true)} />

                    <OptionMore src1="https://res.cloudinary.com/penry/image/upload//w_40,h_40,c_lpad/v1474990234/cd_audio_cd_mcloiq.png"
                        app1="Music"
                        src2="https://res.cloudinary.com/penry/image/upload/v1474990282/SoundYel_aunogm.ico"
                        app2='not-Troll-100%.mp3'
                        click={() => setShowAudioPlayer(true)} />

                    <OptionMore src1="https://res.cloudinary.com/penry/image/upload/c_lpad,g_center,r_0,w_65/v1474990261/media_player_file_sqjlgm.png"
                        app1="Videos"
                        src2="https://res.cloudinary.com/penry/image/upload/v1474990261/media_player_file_sqjlgm.png"
                        app2='crashWindows.mp4'
                        click={() => setShowVideoPlayer(true)} />

                    <Option src="https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico"
                        app="Run"
                        click={handleRunEvent} />

                    <Option src="https://www.manasjha.me/windows-xp/images/icons/bin.png"
                        app="Recycling Bin"
                        click={() => alert('This is the life you got after trying to open Internet Explorer. Trash. 🗑️')}
                    />

                    <Option src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAHa0lEQVRYw8WXXYxVVxXHf2ufO/cyX8wMkA60CAyllSZNIYUqponSQkwabTVNjH1QY2sML0ZjqoZqAlQl+mDtk+kLUeSx0fgZPyitYFIlYGqNMkEBoeXbgfm8987cc/Zey4e9z5k7TV+NN9m5J7nnnvVf//Vf/7UOAGY2ZGb7zeyi/e8/U2b2opkNAUi6ON6+cmrr7dMvUcxcAVMsFPGYBwRMwUK8RuIXlu4xBMOI/wNABAxMc9BACJ5O7tHl93Hnzq9x15bH3wR2ipntb185deDma/torLoXVx/A1KN5G/XzWPBVcPMdjDK2YqYxmCmmAbMQQVqIv5liIcdCTigWyPOc2eYC12+32f7ZI4xte/ywmNnFyz/9zIasbyX14fW42jI0FGjRQvNmDGoBgkdDDmYREIqpRjSmmPpFUBowLTD1EYDvoMU8nXyBZrPFxGSLVmOMpw6enK4BG3z7FvXhdbhaL65nGbgMs4BTj5pCStQhKcsYSMRIPCOuhllALCyWIXIVQatHXEBcDRHHrbfPAAzX0h1YykJDRI56TEOiX9N1iNl1UdxYdS/96x6m985tuJ4+APKpS7SvnGRm/GeYX4igkyzEZTiXIRLB1QAsFKhfIBRtXFk3v4CFDuo7FZhIqa8oX7H98wyMfYh3fuojG6iPbGD5ez/Kf/74HZqXTiQBA+LAZYi4pQCsmMeKFqoeLKDFPOoXogZSYNOQwHhWvm9PFXzu/CvMnPkJ+e1/IfU+eke3MPLg0zRW3sPq3Qe59vuv0Lx4HDBEXGQhy1JZATSgSShaNNG8ifo2VnQiOF8sisl36Fv3MAMbHwXgxrF93Dx+kIWbZwjFPKF1i7kLr/D2y08xe/aXAKzeuR/X01u1p0gWmSgBWMqqbBkLOYSS9kS9anU98sAnAZj66xFal06AecCT9fQysu0ZetdsATw3X/sGxdw1XGOQoc1PIGh0EaHSgCtFiPqubBcFWKq+PPXh9dQGRtG8yeQbh5MY4z2jj+xj5fY9rP3YIWoDo0Bg8vQPAOgf24lB8o5oXIsa6BIZ6YYye1RTh0TlS6Kyc/tCEpamEwj5bCXEsDCFWaB99c8ALFu5OWkgtW761Mp+NY11RrIEwKINd2Uf2Sj/bF3B45l4/bt0bo2zMDGOFtOIGNqZjlQ3BuN97wbA1Keae3BG4goxw7AU1MopAEDWGIgjQZIXARbmmDlzBENxtQiw7z0PAdC+dgpxioiCaAUiasBClwg9lAZEQitWzaASQX3FJuqr7knmkk4Wn+gyQ1w8ww88Hc1pchxcLJmk0+UDPpWgWDQLJPm+dRnMGKOP7EsPPE8xfT6mIFSiEmcV8MFNT9K7ZgcAM2d+iDgFl+aIWbcGtJpiWBZpx8USpDLUR9azete3cfV+8skLXD/65YizGo9S2X9WG2R46xdYvvmZ2K5/e5EwfxkRQcQQSaVY0gVJAyIZuPhkQ0CMxtAGRh99Pgaf+jc3jn0VC21wwuDGj7Bi25ciK9NncT0D1Efuq1ibPXuImTPfh0xi6cWARTFHABaS+RSYOKAnGoUI9aH17wi+F/UtEGFw42Os2rG3Crbsjoeq687ESabHX6Bz809IluI6i5qhbN+yBF3zG80QBHMZjaGxruAXuXns61jRQgRcT38VfP7qCWbGX8I1eoGAn/0H6qfAPFKL+4LDkGBRgBJwS0RopRUXiMswhMbIGKO7vrkY/NXn0KJZCUx9k3z6PPXhTTTueJDwxjWK1hRCAeJT50T/EFWsbD9TsOS03cPIrMCsQEPcBVbvPlgFv3HsOULewlB6176fofs/hav3UUyfiw/pGSTrX5MEltzOaWxFCSAB8OmkXWIpAyGKMBTgapgKrt4fp93RvahvAsrAxt2s+sCzACzf/CSuZwCAyb88j5/9Z9W9pUFJ6ZYWwMVtqfKdJW2oClpgWiBaS56XPD2fQYD+u3dVwWPWMfjt09+ifflXSWBaUS/dBuaS8VhA1JB3ZaCchpJBtrjdjH36d0u2neaF3zJz9mVWbv8irUu/pvXWL2J2BIyUqWi8lhAX11AuqnGwqVo1DmrVWh2SFadFQfM5XH1wSfC5c79h4vWDiCjXj+6J3u5iXctTARGt6DdVNGicrGqgVhlsDcB7Jcs85iMAAc4d+iDismjw6SVEynHqLGbqFHFxUXUuZo+ELuGldwQf0FwJhRI8BDVUuwDM50qPeDIrEHVxmGRxf8NlcfWnrDFp0MTWclnsa8lCZCMpXkrFe8W8ol7J543OPHQ60CkWAVyykfs3zE6cpafuopgyT5Z5cIu7GxanGxLdjNTXWRa/RSILRqS6KklZ98JYmIdmC+baMLR2C8B0DTh89xMvHHj1ex+m0SA+xNWoZUWiP/aVWdnj0c/Ld8EsU5zEfpek/hCi4TiJm5QTIy+MIodmGyZm4bHPHQD4efVyenX8xNY//PhZJt76O+BwmSDiMAMRhxpkrtSB4AREjKAxqBMlc2BqeDVqznCSxGZKUMg9LL9rCzs+cYDNOz7+JrCT/9Pr+Y/K1/P/AkeUKtSG/kJ3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA0LTAxVDEzOjU1OjU1KzAwOjAwPnFKAQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0wMVQxMzo1NTo1NSswMDowME8s8r0AAAAASUVORK5CYII="
                        app="Log Off"
                        click={() => setLogoff(true)}
                    />

                    <a target="_blank" href="https://www.youtube.com/shorts/GMn4pdaUJs8">
                        <Option src="data:image/png;base64,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"
                            app="Shutdown" />
                    </a>

                </div>
            </div>
        </>
    )
}

export default StartMenu