import { useNavigate } from "react-router-dom"

export function Appbar () {
    const Navigate = useNavigate();
    return <div className="bg-slate-300 p-3 flex justify-between pr-6">
        <div className="flex">
        <p className="font-bold text-3xl">DEV</p><span className="font-bold text-green-600 text-xl">100</span>
        </div>  


          <div>

          <button onClick={
            () => {
                Navigate("/blogs/create")
            }
          } type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  shadow-green-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New post</button>
            
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">F</span>
</div>


          </div>

       
    </div>
}