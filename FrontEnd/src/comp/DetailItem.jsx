import React from 'react'
import axios from 'axios'
import React,{useState,useEffect}
import {Contanier,Row,Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const [item, setItem]=useState({})
const {id} = useParams()

useEffect(()=>{
  const fetchData=async()=>
  await axios.get('http://localhost5000/')
  then(() => {
    nav("/");
    })
    .catch((err) => {
  
    console.log("Data not deleted " + err);
    });
    };
    fetchData()

},[])
    


return(
  <Contanier>
     <Row>
      
      
      <Col>

      </Col>



     </Row>

  </Contanier>
)

export default DetailItem