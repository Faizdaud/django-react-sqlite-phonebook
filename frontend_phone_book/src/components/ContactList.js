import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Container, Card, Row, Col, Button} from 'react-bootstrap';


// const ContactList = (props) => {
  
//     return(
//       <Container>
//         <Row>
//           <Col>
//             <h3>Name</h3>
//             {props.contacts.map((contact)=>{
//               return <p>{contact.name}</p>    
//             })}
              
            
//         </Col>
//         <Col>
//             <h3>Number</h3>
//             {props.contacts.map((contact)=>{
//               return <p>{contact.contact_number}</p>    
//             })}     
//           </Col>
//         </Row>
//     </Container>

//     )
//   }

// export default ContactList;


const ContactList = () => {

  const mystyle = {
    backgroundImage : "url(https://i.stack.imgur.com/kb0Zm.jpg)",
    color: "black",
    height: "60vh",
    fontWeight: "bold",
    border: "black 2px solid",
    // backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    marginTop: "2rem",
    overflowY: "scroll"

  };

  const label = {
   fontSize:"2rem",
   fontWeight:"bold",
   textDecoration:"underline"
  
  }

  const subtitle = {
    fontSize:"3rem",
    fontWeight:"bold",
    
   
   }

  const [contacts, setContacts] = useState([])

  // get contacts from backendapi
  const getContacts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/contacts/')
      const contactInfo = response.data
      setContacts(contactInfo)
      // console.log(contactInfo)
      console.log(contacts)
      
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    getContacts()
    console.log(contacts)
  }, [])

 

  
  return(
    <Container className="w-25 p-3" style={mystyle}>
      <h2 className="font-link" style={subtitle}>My Friends</h2>
      <Row>
        <Col>
          <h3 className="font-link" style={label}>Name</h3>
          {contacts.map((contact)=>{
            return <p >{contact.name}</p>    
          })}
            
          
      </Col>
      <Col>
          <h3 className="font-link" style={label}>Number</h3>
          {contacts.map((contact)=>{
            return <p >{contact.contact_number}</p>    
          })}     
        </Col>
      </Row>
      {/* <svg>
  <filter id="wavy2">
    <feturbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feturbulence>
    <feDisplacementMap in="SourceGraphic" scale="20" />
  </filter>
</svg> */}
  </Container>

  

  )
}

export default ContactList;

