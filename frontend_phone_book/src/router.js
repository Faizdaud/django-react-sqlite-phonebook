import React from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const routes = {

  "/add-contact": () => <AddContact />,
  "/": () => <ContactList />
 
};

export default routes;
