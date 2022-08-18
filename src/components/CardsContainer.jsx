import React from 'react'
import Cards from "./Cards";
const CardsContainer = () => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-2 m-2'>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
    </div>
  )
}

export default CardsContainer