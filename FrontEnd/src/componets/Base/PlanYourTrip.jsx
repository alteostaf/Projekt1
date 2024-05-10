import React from 'react'
import './PlanYourTrip.css'
import { Container, Form, Card,  } from 'react-bootstrap'

const PlanYourTrip = () => {
  return (
    <div className='plan-your-trip'>
     <Container>
       <Form className='paragraphs'>
        <h6>3 STEPS TO THE PERFECT TRIP</h6>
        <h1>FIND TRAVEL PERFECTION, WITH THE WISDOM OF EXPERSTS</h1>
        <p>
         Naturally head of the class whe it comes to luxury travel planning,
         because we do more homework than anyone else with a few little sweetners thrown in!
         Travel to the four corners of the world ,without going around in circles.
        </p>
       </Form>

       <Form className='cards'>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

       </Form>
      </Container>
    </div>
  )
}

export default PlanYourTrip