import {Link, useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id;
  const {data:recipe, isPending, error} = useFetch(url);
  
  return (
    <>
    {recipe && (
      <>
        <div className="card card-side bg-base-100 shadow-xl h-min">
          <figure className=''><img src={recipe.img} alt="Movie" className="w-[600px] h-[500px]"/></figure>
          <div className="card-body w-1/2">
            <h2 className="card-title text-4xl text-gray-500">{recipe.title}</h2>
            <p className='text-xl text-gray-400'><span className='font-bold text-accent'>Ingredients:</span> {recipe.ingredients}</p>
            <p className='text-xl text-gray-400'><span className='font-bold text-accent'>Method:</span> {recipe.method}</p>
            <p className='text-xl text-gray-400'><span className='font-bold text-accent'>Cooking Time:</span> {recipe.cookingTime}</p>
            <div className="card-actions justify-end">
              <Link to="/" className="btn btn-accent text-white">Home</Link>
            </div>
          </div>
        </div>
      </>
    )}
    </>
  )
}

export default Recipe