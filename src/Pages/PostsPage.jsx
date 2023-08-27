import React from 'react'
import Post from '../components/Post';
import Protect from '../util/Protect';

export const PostsPage = () => {
  return (

    <Protect>
      <Post/>
    </Protect>
  )
}
export default PostsPage;
