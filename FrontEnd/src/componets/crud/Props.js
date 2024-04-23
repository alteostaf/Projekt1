import React from 'react'
import { Card, Button } from 'react-bootstrap'
const Props = ({ name, photo, description, _id }) => {
    return (
        <Card className='h-100'>
            <Card.Img variant="top" className="h-100"
                src={`http://localhost:5000/images/${photo}`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {/* Linku per kalimin tek komponenti i detajeve */}
                <Button variant="primary" href={`/readOne/${_id}`}>Read More</Button>
            </Card.Body>
        </Card>
    )
}

export default Props