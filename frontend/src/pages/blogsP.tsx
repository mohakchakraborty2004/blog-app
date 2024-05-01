import { useEffect, useState } from "react";
import { FullBlog } from "../components/fullBlog";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function BlogsP(){
    interface Blog{
        "title": string,
        "content" : string, 
        "Name" : string
    }
    
    

    const [loading , setLoading] = useState(true);
    const [blogs , setBlog] = useState();
  
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8787/api/v1/blog/unique/${id}` ,{
            headers :{
                Authorization : "Bearer " + localStorage.getItem("token")
            }
        } )
        .then(
            response => {
            
                console.log(response.data.getBlog)
                setBlog(response.data.getBlog)
                setLoading(false)
            }
        )
    },[])
  
     console.log(blogs);
  
      if(loading) {
        return <div>
          loading , pleaase wait 
        </div>
      }




    return <div>
      <FullBlog title={blogs.title} content={blogs.content} authorName={blogs.author.name}/>


    </div>
}