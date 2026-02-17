import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import AddImage from './components/AddImage'
import Posts from './components/Posts'
import Url from './components/Url'
import Upload from './components/Upload'
import { useState,useRef } from 'react'
function App() {
    const [imageurl,setImageurl] = useState("");
    const inputRef = useRef();
    function imagePreview(){
        setImageurl(inputRef.current.value);
    }
  const myRouter = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
      path:"AddImage",
      element:<AddImage/>,
      children:[{
  path:"Upload",
  element:<Upload/>
},
{
  path:"Url",
  element:<Url inputRef={inputRef} imagePreview={imagePreview} imageurl={imageurl} />
}]},
  {
    path:"posts",
    element:<Posts/>
  }]
  }])
  return (
    <RouterProvider router={myRouter}/>
  )
}

export default App;
