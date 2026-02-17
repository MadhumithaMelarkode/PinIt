import {Link,Outlet} from 'react-router';
import AddTitle from './AddTitle';
function AddImage(){
    return(
        <>
        <div className="border rounded-md bg-white h-130 w-140 px-2">
            <nav className="flex justify-between mx-6 my-4">
                <h1 className="text-2xl mt-1 font-bold">Add Image</h1>
                <Link to="/posts" className="text-3xl mb-1"> x </Link>
            </nav>
            <div className="w-full flex justify-around pb-4 border-b border-gray-400">
                <Link to="Upload" className="text-blue-900 font-bold text-lg"> Upload</Link>
                <Link to="Url" className="text-blue-900 font-bold text-lg">From URL</Link>
            </div>
            <div>
               <Outlet/> 
            </div>
            <AddTitle/>
        </div>
        </>
    )
}
export default AddImage;