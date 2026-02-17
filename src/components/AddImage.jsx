import {Link} from 'react-router';
function AddImage(){
    return(
        <>
        <div className="border rounded-md bg-white h-120 w-130">
            <nav className="flex justify-between mx-6 my-6">
                <h1 className="text-2xl mt-1 font-bold">Add Image</h1>
                <Link to="/" className="text-3xl mb-1"> x </Link>
            </nav>
            <div className="w-full flex justify-around pb-6 mb-8 border-b border-gray-400">
                <button className="text-blue-900 font-bold text-lg"> Upload</button>
                <button className="text-blue-900 font-bold text-lg">From URL</button>
            </div>
            <div className="flex flex-col items-center width-2xl border border-dashed  py-10 m-6 rounded-md border-gray-400">
                <p>Click to Upload image</p>
                <p>PNG, JPG, GIF up to 10MB</p>
            </div>
            <div className="m-4">
                <h3>Title (Optional)</h3>
                <input className="border w-120  px-2 py-1 rounded-sm border-gray-400 my-2" type="text" placeholder="Give your image a title..." />
            </div>
            <div className="flex justify-end">
                <button className="mx-4">Cancel</button>
                <Link to="/posts" className="mx-4 bg-violet-400 px-4 py-2 rounded-sm">Add to Board</Link>
            </div>
        </div>
        </>
    )
}
export default AddImage;