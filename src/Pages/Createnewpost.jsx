import React from 'react'
import CreatePost from '../components/CreatePost';
import Protect from '../util/Protect';
// import ProtectedAdmin from '../util/protectedAdmin';

const Createnewpost = () => {
  return (
    <Protect>
        <CreatePost/>
    </Protect>
  )
}
export default Createnewpost;