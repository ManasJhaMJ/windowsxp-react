import Rungif from '../../assets/run.gif'

function Run({ isRunning }) {

    return (
        <div className={isRunning ? "run running" : "run"}>
            <img src={Rungif} alt="run gif" />
        </div >
    )
}

export default Run