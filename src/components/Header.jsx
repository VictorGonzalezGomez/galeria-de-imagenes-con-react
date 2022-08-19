import React from 'react'

const Header = (props) => {
  return (
    <div>
    <header>
    <h1 className='fontColor bg-dark'>{props.title}</h1>
    </header>
    </div>
  )
}

export default Header