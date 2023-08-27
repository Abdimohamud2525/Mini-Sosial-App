import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UseApp from '../Hooks/useAppGlobal';

 const EditPost = () => {
    const {id} = useParams()
    const {state,dispatch} = UseApp();

    const post = state.posts.find(p => p.id === parseInt(id));

    const [title, setTitle] = useState(post?.title || "");
    const [content,setContent] = useState(post?.content || "");

     const navigate = useNavigate()
    const HandleSubmit = (event)=>{
        event.preventDefault();

        console.log(Date.now())
        const updatedPost = {
            id: post.id,
            title,
            content,
            author: post.author,

        }
        dispatch({
            type: "EDIT_POST",
            payload: updatedPost
        });
        // TODO: add navigation
        // navigate("/")


    }
    
    return (

        <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-5 ml-4 sm:ml-10 md:ml-20 flex flex-col  shadow-sm gap-2 p-4  justify-center items-center'>
    
            <h1>Edit post</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    {/* <label htmlFor=''>Post Title</label> */}
                    <input className= 'border-solid border-2 border-sky-500 ml-6 mb-4'
                    onChange={(event)=>setTitle(event.target.value) }
                    value={title} 
                    type = "text" 
                    name = 'title' 
                    placeholder='post title'
                    />
                </div>
    
                <div>
                {/* <label form=''>Post content</label> */}
                <textarea className='border-solid border-2 border-sky-500'
                 onChange={(event)=>setContent(event.target.value) }
                value={content} 
                name = 'content'
                 id = "" cols= "30" 
                 rows = "10"></textarea>
                </div>
                <button className='w-3/6 ml-9 border-solid	outline-inherit ring-2 ring-blue-500 rounded-md bg-blue-300'  type = "submit">Publish</button>
            </form>
        </div>
      )
}
export default EditPost;