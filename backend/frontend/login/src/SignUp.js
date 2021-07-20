import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const SignUp = ({history}) => {

const [email,setEmail] = useState('')
const[name,setName]   = useState('')
const [password,setPassword] = useState('')

async function SignUp(e){
    e.preventDefault()
    let data = await axios.post("http://localhost:5000/api/auth/register",{name,email,password}
)
if(data.data.message){
    alert(data.data.message)
}
if(data.data.message === "registered successfully"){
    history.push('/')
}

}


    return (
    <div className="container">
      <form className='form'>

      Name:
        <br/>
        <input type ="text" placeholder="Name" value = {name} onChange={(e)=>setName(e.target.value)} required/>
        <br/> 
        Email:
        <br/>
        <input type ="email" placeholder="Email" value = {email} onChange={(e)=>setEmail(e.target.value)} required/>
        <br/>
        Password:
        <br/>
        <input type="password" placeholder="password" value = {password} onChange={(e)=>setPassword(e.target.value)} required/>
        <br/>
        <button id = "button" onClick={SignUp}>SignUp</button>
        <br/>
        <p>Already a customer?<Link to="/">signIn</Link></p>
      </form>
    </div>
    )
}
export default SignUp


