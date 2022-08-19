import React from 'react'

const Cards = (props) => {
  return (

  <div className="col">
    <div className="card">
        <img src={props.src} alt='' className={props.alt}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  </div>


  )
}

export default Cards