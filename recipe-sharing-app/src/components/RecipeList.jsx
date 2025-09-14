 import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';


function RecipeList (){
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
      <div>
        {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
        
          <div key={recipe.id}>
            <h3>
              <Link to={'/recipes/${recipe.id}'}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        )))}
      </div>
    );
  };
  export default RecipeList;