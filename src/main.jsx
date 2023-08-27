import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from '../appContect.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import Createnewpost from './Pages/Createnewpost.jsx'
import PostsPage from './Pages/PostsPage.jsx'
import CreatePost from './components/CreatePost.jsx'
import Post from './components/Post.jsx'
import EditPost from './components/EditPost.jsx'
import CreateGalleriPage from './Pages/CreateGalleriPage.jsx'

const routerProvider = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
  children: [
    {
      index: true,
      element: <Post/>
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/Register',
      element: <RegisterPage/>
    },
    {
      path: "/Create-post",
      element: <Createnewpost/>
    },
    {
      path: "/posts",
      element: <PostsPage/>
    },
    {
      path: "/edit-post/:id",
      element: <EditPost/>
    },
    {
      path: "/create-Gallery",
      element: <CreateGalleriPage/>
    }

  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
    <RouterProvider router={routerProvider}/>
    </GlobalProvider>
  </React.StrictMode>,
)
