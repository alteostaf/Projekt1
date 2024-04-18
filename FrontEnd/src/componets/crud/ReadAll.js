import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Props from './componets/crud/Props'

const ReadAll = () => {useEffect(() => {
  const fetchData = async () => {
    await axios.get('http://localhost:5000/readAll')
     .then((res) => {
     console.log(res.data)

      newItems(res.data)
         })
         .catch((err) => {
  
          console.log('Data not showing ' + err)
       })
    };

          fetchData()
             }, [])
                     return (
                       <Container className="my-5">
                        <h1>Items page</h1>
                          <Row>

                           {[...items].reverse().map((item, index) => {
                             return (
                                 <Col key={index} xs={12} md={6} lg={4} className="mt-5">
                                     <Props {...item} />
                                 </Col>
                               )})}
                          </Row>
  </Container>
  )
  }
  export default ReadAll;