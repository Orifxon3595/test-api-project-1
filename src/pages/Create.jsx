import React from 'react'

function Create() {
  return (
    <div className='max-w-xs mx-auto'>
      <h1 className='text-center text-4xl font-medium'>Create New Recipe</h1>
      <form className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input type="text" placeholder="Title" className="input input-bordered input-accent w-full max-w-xs" />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Ingredients:</span>
          </label>
          <div className='flex gap-4'>
            <input type="text" placeholder="Ingredients" className="input input-bordered input-accent w-full max-w-xs" />  
            <button className='btn btn-outline btn-accent'>Add</button>
          </div>
        </div>
        <label className="label">
          <span className="label-text">Cooking Time</span>
        </label>
        <input type="text" placeholder="Cooking Time" className="input input-bordered input-accent w-full max-w-xs" />
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input type="text" placeholder="Image URL" className="input input-bordered input-accent w-full max-w-xs" /> 
        <label className="label">
          <span className="label-text">Method</span>
        </label>
        <textarea type="text" placeholder="Method" className="input input-bordered input-accent w-full max-w-xs"></textarea>
      </form>
      <button className='btn btn-accent mt-5 w-full max-w-xs'>Create</button> 
    </div>
  )
}

export default Create