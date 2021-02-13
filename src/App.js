import './App.css';
import { useEffect, useState } from 'react'
import Form from './Form'


const initialState = { name: '', email: '', role: ''}

function App() {
  const [team , setTeam] = useState([])
  const [form , setForm] = useState({})
  useEffect( ()=> {
    setTeam([{ name: 'Eli', email: 'elioneal@gmail.com', role: 'frontend' }])
  },[] )

const submit = () => {
  setTeam([...team , form])
  setForm(initialState)
}

const update = (name , value) => {
  setForm({...form , [name]: value})
}

  return (
    <div className="App">
      <Form  form={form} submit={submit} update={update}/>

      { team.map( member => {
        return (
          <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )
      } ) }
    </div>
  );
}

export default App;
