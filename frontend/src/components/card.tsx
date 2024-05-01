import { Link, useNavigate } from "react-router-dom"

interface blogCard {
   AuthorName: string,
   Title: string,
   content: string,
   id : string
}

export function Card({ AuthorName, Title, content, id }: blogCard) {
    const Navigate = useNavigate();

   return <div className="flex  justify-center" >
      <div className="bg-slate-300 pt-5 pb-5 p-10 mt-7 pl-6 w-[700px] rounded-lg">
         <div className="flex items-center pb-4 ">
            <div className="pr-2"><Avatar name={AuthorName} /></div> <div className="font-bold text-[14px]">{AuthorName}</div>
         </div>

         <div className="flex justify-between items-center">
            <div>
               <h1 className="font-bold">{Title}</h1>
               <p className="text-[14px]">{content.slice(0,100)}...</p>
            </div>

            <div>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>
                  {
                     Navigate(`/blogs/${id}`);
                  }
               }>Read</button> 
            </div> 
         </div>


      </div>

   </div>

  
   
  
}


function Avatar({ name }: { name: string }) {
   return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
   </div>
}
