import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseApp from '../Hooks/useAppGlobal';

const GalleiPage = () => {
    const { state, dispatch } = UseApp();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null); // Changed from `content`

    const HandleSubmit = (event) => {
        event.preventDefault();

        // Create a FormData object to handle the image file
        const newPostImg = {
            id: Date.now(),
            title,
            image,
            author: state.auth.currentUser.username

        }
        dispatch({
            type: "ADD_POST",
            payload: newPostImg
        });

        navigate("/");
    }

    return (
        <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-5 ml-4 sm:ml-10 md:ml-20 flex flex-col shadow-sm gap-2 p-4 justify-center items-center'>
            <h1 className='text-lg'>Create Galleri</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    <input
                        className='border-solid border-2 border-sky-500 ml-6 mb-4'
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                        type="text"
                        name='title'
                        placeholder='post title'
                    />
                </div>
                <div>
                    <input
                        className='border-solid border-2 border-sky-500'
                        onChange={(event) => setImage(event.target.files[0])}
                        type='file'
                    />
                </div>
                <button className='w-3/6 ml-9 border-solid outline-inherit ring-2 ring-blue-500 rounded-md bg-blue-300' type="submit">Publish</button>
            </form>
            <img className='w-24 h-24' src={image ? URL.createObjectURL(image) : ''} alt='img' />
        </div>
    );
}

export default GalleiPage;
