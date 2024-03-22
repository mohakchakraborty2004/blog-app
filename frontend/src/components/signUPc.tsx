import { SignupInput } from "@dev60sprint69/dev100-types";
import { InputLabel } from "./inputlabel";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { DATABASE_URL } from "../config";


export function AuthSignUp() {
  //const [name , setName] = useState("")
 // const [email , setEmail] = useState("")
 // const [password , setPassword] = useState("")

  const [postInput , setPost] = useState<SignupInput> ({
    name : "" ,
    email : "",
    password : ""
   } )

  const Navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="bg-slate-200 p-10 rounded-[20px] flex flex-col items-center">

          <h1 className="font-bold text-2xl mb-1">Sign Up</h1>
          <p className="font-semibold text-sm mb-4"> already have an account ? <span className="underline"><Link to={"/signin"}>Login</Link></span></p>

          <InputLabel label="Name" placeholder="peter parker" onChange={(e) => {
               setPost(c => ({
                ...c ,
                name : e.target.value
               }))
          }} />

          <InputLabel label="Email" placeholder="peterparker@gmail.com" onChange={(e) => {
                 setPost(c => ({
                  ...c ,
                  email : e.target.value
                 }))
          }} />

          <InputLabel label="Password" placeholder="iamnotspiderman" onChange={(e) => {
             setPost(c => ({
              ...c ,
              password : e.target.value
             }))
          }} />

          <button className="bg-black text-white font-semibold p-x-4 p-2 rounded-[15px]" onClick={ async () => {
          try {
            const response = await axios.post(`${DATABASE_URL}/api/v1/user/signup` , postInput )
            const jwt = await response.data
            //console.log(jwt)
            localStorage.setItem("token" , jwt)
             Navigate('/blogs')
          } catch (error) {
            console.log(error)
          }
          
       
          
          }}>
            Sign Up
          </button>
        </div>

      </div>

    </>
  )
}