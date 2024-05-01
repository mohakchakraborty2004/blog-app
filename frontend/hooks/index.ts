// import {useEffect, useState} from "react";
// import axios from "axios";

// interface Blog {
//     "title" : string,
//     "content" : string,
//     "author" : {
//        "name" :  string
//     }}
// export function useBlogs() {
//     const [loading , setLoading] = useState(true);
//     const [blogs , setBlog] = useState( [] );


//     useEffect(() => {
//         axios.get("http://127.0.0.1:8787/api/v1/blog/bulk" ,{
//             headers :{
//                 Authorization : localStorage.getItem("token")
//             }
//         } )
//         .then(
//             Response => {
//                 setBlog(Response.data.blogs)
//                 setLoading(false)
//             }
//         )
//     },[])

//     return { 
//         blogs,
//         loading
//     }
// }