import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
const Update = () => {
    const [item, setItem] = useState({
        name: '',
        description: "",
        photo: ""
    })
    const [uploadedImage, setUploadedImage] = useState(null);
    const { id } = useParams()
    const nav = useNavigate()
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
    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const handlePhoto = (e) => {
        setItem({ ...item, photo: e.target.files[0] })
        setUploadedImage(URL.createObjectURL(e.target.files[0]));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();

        Object.entries(item).forEach(([key, value]) => {
            formData.append(key, value);
        });
        await axios.patch(`http://localhost:5000/update/${id}`, formData)
            .then(res => {
                console.log("Added")
                setItem({
                    name: '',
                    description: "",
                    photo: ""
                })
                nav('/')
            }).catch(err => {
                console.log("error" + err)
            })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form encType='multipart/form-data' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="name" value={item.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={item.description} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" accept=".jpeg, .png, .jpg" name="photo"
                                onChange={handlePhoto}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Image
                        src={`http://localhost:5000/images/${item.photo}`}
                        alt='Uploaded'
                        rounded
                        className='img-fluid'
                    />
                    {/* Shfaqja e imazhit */}
                    {uploadedImage && (
                        <Image
                            src={uploadedImage}
                            alt='Uploaded'
                            rounded
                            className='img-fluid'
                        />
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Update