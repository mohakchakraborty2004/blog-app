interface Quote {
   quote : string ,
   person : string ,
   position : string
}

export function Quote ({quote , person , position} : Quote ){
    return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-300">
     <div className="flex flex-col justify-start">
        <p className="font-bold text-3xl max-w-lg">{quote}</p>
        <p className="font-semibold text-sm mt-2 mb-1">{person}</p> 
        <p className="font-semibold text-xs text-slate-500"> {position} </p>
     </div>
    </div>
   )
}