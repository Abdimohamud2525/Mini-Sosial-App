// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../appContect';

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);


  return (


    <div className='flex justify-around bg-teal-400 cursor-pointer  h-24 min-h-full items-center text-lg text-colors-white'>
      <Link className='text-lg' to="/">Logo</Link>
      <ul className='flex justify-center gap-4 aligitem-center'>
        <Link to="/posts">post</Link>
        <Link to="/Create-post">Create-new-post</Link>
        <Link to="/create-Gallery">Create-Galleri</Link>
        {state.auth.isAuthenticated ? (
          <>
            <span className= "bg-green-400">Welcome {state.auth.currentUser.username}</span>
            <button onClick={()=> dispatch({
              type: "LOGOUT"
            })}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
