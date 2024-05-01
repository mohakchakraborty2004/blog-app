import { Appbar } from "../components/appbar"
import { Card } from "../components/card"
import { useState , useEffect } from "react";
import axios from "axios";

export function Blogs () {

  interface Blog {
    "title" : string,
    "content" : string,
    "id" : string,
    "author" : {
       "name" :  string
    }}

  const [loading , setLoading] = useState(true);
  const [blogs , setBlog] = useState<Blog[]>([]);


  useEffect(() => {
      axios.get("http://127.0.0.1:8787/api/v1/blog/bulk" ,{
          headers :{
              Authorization : "Bearer " + localStorage.getItem("token")
          }
      } )
      .then(
          response => {
          
              console.log(response.data.blogs)
              setBlog(response.data.blogs)
              setLoading(false)
          }
      )
  },[])



    if(loading) {
      return <div>
        loading , pleaase wait 
      </div>
    }
    return (
        <>
           <Appbar></Appbar>
          <div>
            {blogs.map(blog=> <Card id={blog.id} Title={blog.title} content={blog.content} AuthorName={blog.author.name} /> )}
            
          </div>
        </>
    )
}