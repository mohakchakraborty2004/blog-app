import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function CrBlog() {
    const [blogs , setBlogs] = useState({
    title : "",
    content : ""
    });

    const Navigate = useNavigate();
     
    console.log(blogs)


    return  <div >

        <div className="pt-[100px]">

        <div className="flex justify-center">
        <input placeholder="Title" type="text" className="w-[800px] border p-5 mb-7 text-lg font-bold"  onChange={(e) => {
            setBlogs(c => ({
                ...c ,
                title : e.target.value
            }))
        }} />
        </div>

        <div className="flex justify-center">
        <textarea placeholder="Write your story" name="" id="" cols={"30"} rows="10" className="w-[800px] border p-5" 
        onChange={(e) => {
            setBlogs(c => ({
                ...c ,
                content : e.target.value
            }))
        }}
        ></textarea>
        </div>
        
        <div className="flex justify-center ">
        <button 
        
        onClick={
            async() => {
                const response =  await axios.post("http://127.0.0.1:8787/api/v1/blog/create" , blogs , {
                    headers : {
                        Authorization : "Bearer " + localStorage.getItem("token")
                    }
                })
                const id = await response.data.blogID 
                Navigate(`/blogs/${id}`)
            }
        }

        type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">Publish</button>

<button 
        
        onClick={
            () => {
              
                Navigate(`/blogs`)
            }
        }

        type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">Back</button>

        </div>
       

        </div>

       
    </div>
   
}























