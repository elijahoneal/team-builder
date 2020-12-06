import './App.css';
import React, { useState } from "react";
import Form from "./component/Form";
import FormData from "./component/FormData";
function App() {
  const [forms , setForms] = useState([
    {
      name:'Please Enter Your Name',
    email: 'Please Enter Your Email',
    role: 'Select A Role'
    }
  ])  
  const addNewForm = (form) => {

  const newForm = {
    name: form.name,
    email: form.email,
    role: form.role

  };
  setForms([...forms , newForm]);
};

  return (
    <div className="App">
      <h1>New Team Member</h1>
      <Form addNewForm = {addNewForm}/>
      <FormData forms = {forms} />
     
    </div>
  );
}

export default App;
