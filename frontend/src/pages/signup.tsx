import { Quote } from "../components/Quote";
import { AuthSignUp } from "../components/signUPc";


export function Signup () {
    return (
        <>
        <div className="grid grid-flow-col grid-cols-2">
                <div>
                     <AuthSignUp></AuthSignUp>
                </div>
                <div>
                <Quote quote="Just start writing already, it's a smooth experience. I gaurantee." person="Samyak Jain"  position="CEO | Samyak Foundations"/>
                </div>
        </div>

         
        </>
    )
}