import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

function RecipeDetailsWrapper(){
  const { id } = useParams();
  const recipeId = parseInt(id); // assuming IDs are numbers
  return <RecipeDetails recipeId={recipeId} />;
};
export default RecipeDetailsWrapper;