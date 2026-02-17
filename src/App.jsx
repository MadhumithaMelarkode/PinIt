import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import AddImage from './components/AddImage'
import Posts from './components/Posts'
function App() {
  const myRouter = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
      path:"AddImage",
      element:<AddImage/>
    },
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
