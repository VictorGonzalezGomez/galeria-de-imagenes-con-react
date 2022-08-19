import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Footer = () => {
  return (

    <Card className="text-center">
    <Card.Header className="bg-dark text-white">Mi Trabajo</Card.Header>
    <Card.Body>
      <Card.Text>
      Este es una pequeña muestra de mi incursion en la fotografia callejera y de paisajes a travez de mi pais Chile.
      </Card.Text>
      <Button variant="warning">Contacto</Button>
    </Card.Body>
  </Card>
  )
}

export default Footer