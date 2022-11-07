import React from 'react'
import "./home.scss"
import {createSearchParams, Link, useNavigate} from "react-router-dom"
import { useContext } from 'react'
import { statecontext } from '../context/context'
import { type } from '@testing-library/user-event/dist/type'


const Home = () => {
  const {state,dispatch}=useContext(statecontext);
  const navigate=useNavigate()
  console.log("state context ",state)


const upadateage=()=>{
  dispatch()
}



const edit=(id)=>{
navigate({
  pathname:"/task",
  search:createSearchParams({
    id:id
  }).toString()
})

}

const deletefun=(id)=>{
console.log(id)
dispatch({type:"deletefun",payload:id})
}
  
  return (
    
    <div>
      <div className='nav'>
            <div className='logo'></div>
            <div className='list'>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/task"}>Task</Link></li>
                </ul>
            </div>
            {/* {item.task}{item.description} */}
      </div>
   
      <div className='container'>
      <h1>Home</h1>
      {/* <h3>{state.name}</h3>
      <h3>{state.age}</h3>
      <button onClick={()=>{upadateage()}}>increment</button> */}
      {state.value?.map((item,index)=><p key={index}>{item.task}{item.description}</p>)}
      {state.task?.map((item,index)=>{
      return(
        <div key={index} className='user'>
            <h3>{item.task}</h3>
            <h5>{item.description}</h5>
            <button onClick={()=>{edit(item.id)}}>Edit</button><br />
           
           <button onClick={()=>{deletefun(item.id)}}>delete</button>
        </div>
     
      )
    })}
    </div>
    </div>
  )
}

export default Home