import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Row, Col, Button} from 'react-bootstrap';


import './App.css';
import  AddContact from './components/AddContact'
import ContactList from './components/ContactList';
import axios from 'axios'

import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import routes from "./router";

function App() {

  const buttons = {
    margin:"1rem"
  }

  const [contacts, setContacts] = useState([])

  // get contacts from backendapi
  const getContacts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/contacts/')
      const contactInfo = response.data
      setContacts(contactInfo)
      // console.log(contactInfo)
      
    } catch (error) {
      console.log(error)
    }
  }

  // save contacts
  const saveContact = () =>{
    
    axios.post(
      'http://127.0.0.1:8000/api/contacts/', {
      "name": 'ahmad',
      "contact_number": '0134342432'
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //load contacts when render
  useEffect(() => {
    getContacts()
    console.log(contacts)
  }, [])

  const routeResult = useRoutes(routes);

  return (
    <div className="App">
    <h1>Phone Book</h1>
      
       {/* <ContactList contacts={contacts}/> */}

   
      {/* <A href="/add-contact">AddContact</A> <br /> */}

      <Button 
        style={buttons}
        color="primary" 
        size="large"
        component={A}
        href="/" //href
      >Contacts</Button>

      <Button 
        color="primary" 
        size="large"
        component={A}
        href="/add-contact" //href
      >Add New</Button>

      {/* <AddContact /> */}
      {routeResult}
    </div>
  );
}

export default App;
