import React from 'react'
import ProtectedAdmin from '../util/protectedAdmin';
import EditPost from '../components/EditPost';

 const EditsPostPage = () => {
  return (
    <ProtectedAdmin>
        <EditPost/>
    </ProtectedAdmin>
  )
}
export default EditsPostPage;