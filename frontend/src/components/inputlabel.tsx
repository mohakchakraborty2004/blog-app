import { ChangeEvent } from "react"

interface Inputs {
    label : string,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void ,
    placeholder : string ,
    type? : string
}

export function InputLabel ({label , placeholder , onChange , type} : Inputs) {
    return <div className="flex flex-col justify-start">
       <p className="font-semibold"> {label}</p> 
        <input className="border-2 rounded-[20px] p-2 pl-3 mt-1 mb-4" type= {type} placeholder={placeholder} onChange={onChange} /> 
    </div>
}