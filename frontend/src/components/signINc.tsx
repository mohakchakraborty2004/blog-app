import { SigninInput } from "@dev60sprint69/dev100-types";
import { InputLabel } from "./inputlabel";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { DATABASE_URL } from "../config";

export function AuthSignin() {
  
const [loginInputs , setLogin] = useState<SigninInput> ({
  email : "" ,
  password : "" 
})

const Navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="bg-slate-200 p-10 rounded-[20px] flex flex-col items-center">

          <h1 className="font-bold text-2xl mb-1">Sign In</h1>
          <p className="font-semibold text-sm mb-4"> Don't have an account ? <span className="underline"><Link to={"/signup"}>Sign Up</Link></span></p>

          <InputLabel label="Email" placeholder="peterparker@gmail.com" onChange={(e) => {
               setLogin(c => ({
                ...c ,
                email : e.target.value
                } ))
          }} />

          <InputLabel label="Password" placeholder="iamnotspiderman" onChange={(e) => {
                setLogin(c => ({
                  ...c ,
                  password : e.target.value
                  } ))
          }} />

          <button className="bg-black text-white font-semibold p-x-4 p-2 rounded-[15px]" onClick={async  () => {
            
            try {
              const response =  await axios.post(`${DATABASE_URL}/api/v1/user/signin` , loginInputs)
              const jwt =  await response.data
              localStorage.setItem("token" , jwt)
              Navigate('/blogs')
            } catch (error) {
              console.log(error)
            }
            
            
         
          }}>
            Sign In
          </button>
        </div>

      </div>

    </>
  )
}