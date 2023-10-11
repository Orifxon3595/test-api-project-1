
import RecipeList from '../components/RecipeList';
import { useFetch } from '../hooks/useFetch';

function Home() {
    const {data:recipes, isPending, error} = useFetch('http://localhost:3000/recipes')
    return (
    <>
        {recipes && <RecipeList recipes={recipes}/>}
    </>
  ) 
}

export default Home