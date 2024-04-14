function Option(props) {
  return (
    <div className='option'>
      <img src={props.src} alt="program" />
      <button onClick={() => props.click(true)}>
        <p>{props.app}</p>
      </button>
    </div>
  )
}

export default Option