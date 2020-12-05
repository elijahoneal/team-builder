import React , { useState } from "react";
const TeamForm = (props) => {
    const [teamMember , setTeamMember] = useState({ name: "", email: "", role: "" });
    const handleChange = (event) => {
      setTeamMember({...teamMember , [event.target.name]: event.target.value});
    };

  const submitForm = (event) => {
    event.preventDefault();
      props.addNewForm(teamMember);
    setTeamMember({ name: "", email: "", role: "" });
    console.log(teamMember)

  }

  return (
    <form onSubmit = {submitForm}>
    <label htmlFor = "name">Name</label>
      <input
        id = "name"
        name = "name"
        type = "text"
        placeholder = "Enter Name"
        onChange = {handleChange}
        value = {teamMember.name}
      />

    <label htmlFor = "email">Email</label>
     <input
      id = "email"
      name = "email"
      type = "email"
      placeholder = "Enter Email"
      onChange = {handleChange}
      value = {teamMember.email}
     />

    <label htmlFor = "role">Role</label>
      <select
      id = "role"
      name = "role"
      placeholder = "Select A Role"
      onChange = {handleChange}
      value = {teamMember.role}
      >
        <option value = "Choose Role" >Choose Role</option>
        <option value = "Frontend Developer" >Frontend Developer</option>
        <option value = "Backend Developer" >Backend Developer</option>
        <option value = "UX/UI Developer" >UX/UI Developer</option>
        <option value = "Senior Developer" >Senior Developer</option>
        <option value = "Designer" >Designer</option>
      </select>
      <button type = "submit">Submit</button>
  </form>
  )
}

export default TeamForm;