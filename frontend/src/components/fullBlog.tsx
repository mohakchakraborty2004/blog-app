import { useNavigate } from "react-router-dom";

interface blog {
    title : string , 
    content :  string, 
    authorName : string
}


export function FullBlog({title , content , authorName} : blog) {
    const Navigate = useNavigate();
    return <div className="grid grid-cols-5">
        <div className=" col-span-3 h-[100vh] p-10">
            <h1 className="text-5xl font-bold pb-14"> {title}</h1>
            <p className="text-[15px] font-medium pb-[50px]">{content}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>
                  {
                     Navigate(`/blogs`);
                  }
               }>Back</button> 
        </div>

        <div className="col-span-2 h-[100vh] p-[60px] pl-[190px]">
            <h1 className="text-3xl font-bold pb-5">AUTHOR</h1>

            <div className="flex items-center">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-3">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{authorName[0]}</span>
                </div>
                <h1 className="text-[14px] font-semibold">{authorName}</h1>
            </div>

        </div>
    </div>
} 
//Lorem ipsum dolor sit amet consectetur adipisicing.
//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse perspiciatis adipisci? Ipsa ullam facilis necessitatibus cupiditate corrupti minima provident mollitia similique, aspernatur dicta pariatur voluptatem asperiores eligendi modi officia?