import React, { useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios'
// import { useHistory } from "react-router-dom";
import { useRoutes, A, navigate } from "hookrouter";



const AddContact = () => {

    const mystyle = {
        backgroundImage : "url(https://i.stack.imgur.com/kb0Zm.jpg)",
        color: "black",
        fontWeight: "bold",
        border: "black 2px solid",
        // backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        marginTop: "2rem",
    
      };

    const [contact, setContact] = useState({
        "name": "",
        "contact_number": ""
    });
    ;

    const saveContact = (contact) =>{
    
        axios.post(
          'http://127.0.0.1:8000/api/contacts/', {
          "name": contact.name,
          "contact_number": contact.contact_number
        }).then(function (response) {
          console.log(response);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
        saveContact(contact);
        
    }

    return (
        // <h1>Hey</h1>
        <div className="#">

             <Container className="justify-content-center w-25 p-3" col="4" style={mystyle} fluid>
             <Row>
                <Col >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFriend">
                            
                        <Form.Label className="font-link">Friend Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Your Friend's Name" 
                            name="name"
                            onChange= {(e) => setContact({...contact, name: e.target.value})}/>

                        <Form.Label className="font-link">Contact Number</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Friend's Contact Number"
                            name="contactNumber" 
                            onChange= {(e) => setContact({...contact, contact_number: e.target.value})} />

                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
                </Row>
            </Container>
        </div>

    )
}

export default AddContact