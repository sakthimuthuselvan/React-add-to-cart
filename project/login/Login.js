
import React, { useState } from 'react'
import "./Login.css"
import Json from "./user.json"

import { useNavigate } from 'react-router-dom';


const Login= () => {
   
    const [name,setName]=useState("")
    const [password,setpassword]=useState("")
    const [err,setErr]=useState()
    const Navigate=useNavigate()
  

// console.log(Json)



const userSubmit=(a)=>{
  
    a.preventDefault();

    if(name==="" && password===""){
        setErr("invaild username and password")
    }else if(name===""){
        setErr("invaild username")
    }else{
        setErr("invaild password")
    }



 
    console.log("username",name)
    Json.find((item)=>{
    
   
        if(item.name===name && item.password===password){
           return  Navigate("home")  
        }
    
})
    console.log("userstate",password,name,Json)
    
   
    

}

const username=(a)=>{
    setName(a.target.value)
console.log(password)
}
 
const userpassword=(b)=>{

    setpassword(b.target.value)
    console.log(name)
}


  return (
    <div className="login">
        <div className="login1">
        <h1>Login</h1>
        <div className='hr'>
            <div></div>
        </div>

        <form>
        <input onChange={username}  type={"text"} placeholder={"username"} /><br />
        <input onChange={userpassword} type={"password"} placeholder={"password"} /><br />
        <button onClick={(a)=>{userSubmit(a)}}>submit</button>
        </form>
       
        <p>{err}</p>
        </div>
        
    </div>
  )
}

export default Login