
import RecipeList from '../components/RecipeList';
import { useFetch } from '../hooks/useFetch';

function Home() {
    const {data:recipes, isPending, error} = useFetch('https://irradiated-fierce-card.glitch.me/recipes')
    return (
    <>
        {recipes && <RecipeList recipes={recipes}/>}
    </>
  ) 
}

export default Home