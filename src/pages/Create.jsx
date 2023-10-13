import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFetch } from '../hooks/useFetch'
import {useNavigate} from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [img, setImg] = useState("")
  const [method, setMethod] = useState("")
  const [ingredient, setIngredient] = useState("")
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate()

  const {data, isPending, error, getNewRecipe} = useFetch('https://irradiated-fierce-card.glitch.me/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault();
    getNewRecipe({
    id: uuidv4(),
    title,
    cookingTime: `${cookingTime} minutes`,
    method,
    img,
    ingredients
    });
  }

  const handleAdd = (e) => {
    e.preventDefault();

    if(!ingredients.includes(ingredient)){
      setIngredients((prev) => {
        return [...prev, ingredient]
      })
    }
    setIngredient("")
  }

  useEffect(() => {
    if(data) {
      navigate('/');
    }
  }, [data])

  return (
    <div className='max-w-xs mx-auto'>
      <h1 className='text-center text-4xl font-medium'>Create New Recipe</h1>
      <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" className="input input-bordered input-accent w-full max-w-xs" />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Ingredients:</span>
          </label>
          <div className='flex gap-4'>
            <input onChange={(e) => setIngredient(e.target.value)} value={ingredient} type="text" placeholder="Ingredients" className="input input-bordered input-accent w-full max-w-xs" />  
            <button onClick={handleAdd} className='btn btn-outline btn-accent'>Add</button>
          </div>
          <p>
            Ingredients: {" "}
            {ingredients.map((ing) => {
              return <span key={ing}>{ing}, </span>
            })} 
          </p>
        </div>
        <label className="label">
          <span className="label-text">Cooking Time</span>
        </label>
        <input onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} type="text" placeholder="Cooking Time" className="input input-bordered input-accent w-full max-w-xs" />
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input onChange={(e) => setImg(e.target.value)} value={img} type="text" placeholder="Image URL" className="input input-bordered input-accent w-full max-w-xs" /> 
        <label className="label">
          <span className="label-text">Method</span>
        </label>
        <textarea onChange={(e) => setMethod(e.target.value)} value={method} type="text" placeholder="Method" className="input input-bordered input-accent w-full max-w-xs"></textarea>
      </form>
      <button onClick={handleSubmit} className='btn btn-accent mt-5 w-full max-w-xs'>Create</button> 
    </div>
  )
}

export default Create