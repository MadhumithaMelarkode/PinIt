function Url({inputRef,imagePreview,imageurl}){
    return(
        <>
        <div >
            <p className="mx-4 my-2">Image URL</p>
            <input className="w-130 m-2 border border-gray-400 mx-2 px-4 py-2 rounded-lg" type="text" placeholder="https://example.com/image.jpg" ref={inputRef} />
        </div>
        {(imageurl==="")?
        <div className="w-130 bg-gray-200 mx-2 my-2 px-4 py-2 rounded-lg text-center">
            <button onClick = {imagePreview} className="cursor-pointer">Load Preview</button>
        </div>:(
            <img src={imageurl} alt="image" className="text-center w-40 h-40 border ml-45" />
        )}
        </>
    )
}
export default Url;