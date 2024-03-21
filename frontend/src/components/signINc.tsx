import { SignupInput } from "@dev60sprint69/dev100-types";
import { InputLabel } from "./inputlabel";
import { Link } from "react-router-dom";
import { useState } from "react";

export function AuthSignin() {
  
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="bg-slate-200 p-10 rounded-[20px] flex flex-col items-center">

          <h1 className="font-bold text-2xl mb-1">Sign In</h1>
          <p className="font-semibold text-sm mb-4"> Don't have an account ? <span className="underline"><Link to={"/signup"}>Sign Up</Link></span></p>

          <InputLabel label="Email" placeholder="peterparker@gmail.com" onChange={(e) => {
               setEmail(e.target.value)
          }} />

          <InputLabel label="Password" placeholder="iamnotspiderman" onChange={(e) => {
               setPassword(e.target.value)
          }} />

          <button className="bg-black text-white font-semibold p-x-4 p-2 rounded-[15px]" onClick={() => {
        
            console.log(email)
            console.log( password )
          }}>
            Sign In
          </button>
        </div>

      </div>

    </>
  )
}