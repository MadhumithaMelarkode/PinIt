import { Link } from "react-router";
function Upload(){
    return(
        <>
        <div className="flex flex-col items-center width-2xl border border-dashed  py-10 m-6 rounded-md border-gray-400">
                <p>Click to Upload image</p>
                <p>PNG, JPG, GIF up to 10MB</p>
            </div>
        </>
    )
}
export default Upload;