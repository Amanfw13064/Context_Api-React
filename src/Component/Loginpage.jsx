import { useState,useContext } from "react";
import { Navbar } from "./Navbar";
import { IsAuthContext } from "../Context/IsAuthConextProvider";


// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const LoginPage=()=>{
    
    const {isAuth,authhandle}=useContext(IsAuthContext)
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const handle=(e)=>{
       setEmail(e.target.value)
   }
   const handle2=(e)=>{
       setPassword(e.target.value)
   }
   const check=async()=>{
       const log={"email":email,"password":password}
        let response= await fetch("https://reqres.in/api/login",{
              method:"POST",
            body:JSON.stringify(log),
            headers:{
                'Content-Type':"application/json",
            }
          })
          let data=await response.json()
          if(data.error=="user not found"){
              alert('user not found')
          }
          else{
              alert('login successfull')
              authhandle("True")
          }        
   }
    return <div>
        <Navbar/>
        <div id="form">
        <h2>Login status:{isAuth}</h2>
        <input onChange={handle} type="text" placeholder="email"/><br/>
        <input onChange={handle2} type="text" placeholder="password"/><br/>
        <button onClick={check}>Login</button>
        </div>
    </div>
}