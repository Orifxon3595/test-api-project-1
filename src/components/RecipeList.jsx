import {Link} from 'react-router-dom'

function RecipeList({ recipes }) {

  return (
    <ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {recipes.map((recipe) => {
        const {id, title, method, cookingTime, img} = recipe
        return(
          <li className="card max-w-full bg-base-100 shadow-xl">
            <figure><img  
            src={img}
            alt={title}
            className="h-[240px] object-cover w-full"
            /></figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{method.substring(0, 70)}...</p>
              <p className='text-red-500 text-primary'><span className='text-gray-600 font-bold'>Cooking Time:</span> {cookingTime}</p>
              <Link to={`/recipe/${id}`} className="btn btn-outline btn-accent">Read More</Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default RecipeList