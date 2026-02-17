import {Link,Outlet} from 'react-router';
function Layout(){
     return (
    <>
      <div className="bg-slate-200 w-screen h-screen">
        <nav className="justify-around flex h-20 border border-gray-200 w-screen bg-blue-900">
          <h1 className="text-white mt-6 text-2xl">Create New Posts</h1>
          <Link to="/AddImage" className="bg-white mt-5 h-10 p-2 rounded-sm">+ Add Image</Link>
        </nav>
        <div className='w-140 mx-auto mt-10'>
        <Outlet/>
        </div>
      </div>
    </>
  )
}
export default Layout;