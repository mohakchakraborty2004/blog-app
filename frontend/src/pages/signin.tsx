import { Quote } from "../components/Quote";
import { AuthSignin } from "../components/signINc";


export function Signin () {
    return (
        <>
        <div className="grid grid-flow-col grid-cols-2">
                <div>
                     <Quote quote="I can very easily share my thoughts about this changing technology on DEV100. I am very satisfied with their terms of freedom of speech" person="Dolly Chaiwala"  position="CEO | Microsoft"/>
                </div>
                <div>
                     <AuthSignin></AuthSignin> 
                </div>
        </div>

         
        </>
    )
}