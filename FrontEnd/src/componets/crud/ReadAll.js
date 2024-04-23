import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import Props from './Props'
const ReadAll = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await axios.get("http://localhost:5000/readAll")
                .then((res) => {
                    console.log(res.data)
                    setItems(res.data)
                })
                .catch(err => {
                    console.log("Data not readed " + err)
                })
        };
        fetchData()
    }, [])
    return (
        <Container>
            <Row>
                {items.map((item) => {
                    return (
                        <Col key={item._id}>
                            <Props {...item} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ReadAll