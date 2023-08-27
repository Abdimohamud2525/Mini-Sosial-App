import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UseApp from '../Hooks/useAppGlobal';

 const CreatePost = () => {

    const {state,dispatch} = UseApp();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content,setContent] = useState("");

    const HandleSubmit = (event)=>{
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            content,
            author: state.auth.currentUser.username

        }
        dispatch({
            type: "ADD_POST",
            payload: newPost
        });
        // TODO: add navigation
        navigate("/")


    }
  return (

    <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-5 ml-4 sm:ml-10 md:ml-20 flex flex-col  shadow-sm gap-2 p-4  justify-center items-center'>

        <h1 className='text-lg'>Create New Post</h1>
        <form onSubmit={HandleSubmit}>
            <div>
                {/* <label htmlFor=''>Post Title</label> */}
                <input className='border-solid border-2 border-sky-500 ml-6 mb-4'
                onChange={(event)=>setTitle(event.target.value) }
                value={title} 
                type = "text" 
                name = 'title' 
                placeholder='post title'
                />
            </div>

            <div>
            {/* <label form=''>Post content</label> */}
            <textarea  className='border-solid border-2 border-sky-500'
             onChange={(event)=>setContent(event.target.value) }
            value={content} 
            name = 'content'
             id = "" cols= "30" 
             rows = "10"></textarea>
            </div>
            <button className='w-3/6 ml-9 border-solid	outline-inherit ring-2 ring-blue-500 rounded-md bg-blue-300' type = "submit">Publish</button>
        </form>
    </div>
  )
}
export default CreatePost;