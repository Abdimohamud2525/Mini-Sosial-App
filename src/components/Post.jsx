import React, { useEffect } from 'react';
import UseApp from '../Hooks/useAppGlobal';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const { state, dispatch } = UseApp();
  const navigate = useNavigate();

  useEffect(() => {
    // Tässä voit kutsua tarvittavaa funktiota tai tehdä tarvittavia toimenpiteitä
    // state.posts -taulukon asettamiseksi
  }, []); // Tyhjä taulukko tarkoittaa, että useEffect suoritetaan vain komponentin ensimmäisellä renderöinnillä

  return (
    <div className= 'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-5 ml-4 sm:ml-10 md:ml-20 flex flex-col  shadow-sm gap-2 p-4  justify-center items-center bg-sky-800 text-slate-100' >
      {state.posts.map((post) => (
        <div key = {post.id}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {post.image && <img src={post.image ? URL.createObjectURL(post.image) : ''} alt='img' />} {/* Näytä kuva, jos se on olemassa */}
        <p className='text-emerald-700'>create by : {post.author}</p>
        {state.auth. currentUser &&
        post.author === state.auth. currentUser.username && 
        <div>
        <button className='w-3/5 bg-red-400 rounded-md'
        onClick={()=>
          dispatch({

            type:  "DELETE_POST",
            payload: post.id,
        })
      }>
          delet
          </button>
        <button className='w-3/5 bg-red-400 rounded-md  mt-4'
        onClick={()=>navigate(`/edit-post/${post.id}`)}
        >
          update
          </button>
        </div>
}
        </div>
      ))}
    </div>
  );
};

export default Post;
