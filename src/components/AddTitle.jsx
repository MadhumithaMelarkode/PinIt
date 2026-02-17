import { Link } from "react-router";
function AddTitle(){
    return(
        <>
            <div className="mx-2 my-2">
                <h3>Title (Optional)</h3>
                <input className="border w-130  px-2 py-2 rounded-lg border-gray-400 my-2" type="text" placeholder="Give your image a title..." />
            </div>
            <div className="flex justify-end mb-4">
                <button className="mx-4">Cancel</button>
                <Link to="/posts" className="mx-4 bg-violet-400 px-4 py-2 rounded-sm">Add to Board</Link>
            </div>
        </>
    )
}
export default AddTitle;