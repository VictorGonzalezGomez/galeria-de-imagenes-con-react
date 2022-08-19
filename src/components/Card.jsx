import React from 'react'
import Card from 'react-bootstrap/Card';

const CardElement = (props) => {
  return (


     <Card>
            <Card.Img variant="top" src={props.src} alt={props.alt}/>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
               {props.text}
              </Card.Text>
            </Card.Body>
          </Card>



  )
}

export default CardElement