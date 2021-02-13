import React from 'react'

const Form = (props) => {

const { form , update , submit } = props

const handleSubmit = e => {
    e.preventDefault()
    submit()
}

const handleChange = e => {
    const {name , value} = e.target;
    update(name , value)
}
    
    return (
        <form onSubmit = {handleSubmit}>
            <label>
                <input
                name ='name'
                type ='text'
                value ={form.name}
                onChange = {handleChange}
                placeholder='your name'
                />
            </label>
            <label>
                <input
                name ='email'
                type ='email'
                value ={form.email}
                onChange = {handleChange}
                placeholder='your email'
                />
            </label>
            <label>
                <select 
                    name ='role'
                    value ={form.role}
                    onChange = {handleChange}>
                    <option value=''>--Select A Role--</option>
                    <option value='Frontend'>Frontend Dev</option>
                    <option value='Backend'>Backend Dev</option>
                    <option value='Designer'>Designer</option>
                    <option value='ProjectManager'>Project Manager</option>
                </select>
            </label>
            <button>Add member</button>
        </form>
    )
}


export default Form