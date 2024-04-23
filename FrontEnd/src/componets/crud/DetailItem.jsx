import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams , useNavigate } from 'react-router-dom'
const DetailItem = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    const nav = useNavigate ()
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:5000/readOne/' + id)
                .then(res => {
                    console.log(res)
                    setItem(res.data)
                })
                .catch(err => {
                    console.log("Data not showing " + err)
                })
        };
        fetchData()
    }, [id])

    const handleDelete = async (id)=>{
        await  axios.delete('http://localhost:5000/delete/' + id )
        .then(res=>{
            console.log("Deleted")
            nav('readAll')
        })
        .catch(err =>console.log("Data not deleted" + err))
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <Button variant='danger' onClick={()=>handleDelete(item._id)} > Delete </Button>
                    <Button variant='warning'  href={`/update/${item._id}`}> Update </Button>
                </Col>
                <Col>
                    <img src={`http://localhost:5000/images/${item.photo}`} className='img-fluid' alt={item.name} />
                </Col>
            </Row>
        </Container>
    )
}
export default DetailItem