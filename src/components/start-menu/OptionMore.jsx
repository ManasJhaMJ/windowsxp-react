function OptionMore(props) {
    return (
        <div className='option more'>
            <img src={props.src1} alt="application" className="avoid-close" />
            <p className="avoid-close">{props.app1}</p>
            <div className='inner-option'>
                <img src={props.src2} alt="program" />
                <button
                    onClick={props.click}
                >
                    <p>{props.app2}</p>
                </button>
            </div>
        </div>
    )
}

export default OptionMore