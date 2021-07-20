import { useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import axios from 'axios'



function App({history}) {

const [email,setEmail] = useState('')
const [password,setpassword] = useState('')



async function Login(e){
    e.preventDefault()
    let data = await axios.post("http://localhost:5000/api/auth/login",{email,password})
if(data.data.message){
    alert(data.data.message)
}


}






  return (
    <div className="container">
      <form className='form'>
        Email:
        <br/>
        <input type ="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required/>
        <br/>
        Password:
        <br/>
        <input type="password" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}} required/>
        <br/>
        <button id = "button" onClick={Login}>Login</button>
        <br/>
        <p>New customer?<Link to="signUp">signUp</Link></p>
      </form>
      <input type="date" style={{height:'40px', width:'350px'}} onClick={''}></input>
    </div>
  );
}

export default App;
