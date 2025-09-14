import {create} from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
   );
    return { recommendations: recommended };
  }),

  setSearchTerm: (term) => set({serchTerm: term}),
  
  filterRecipes: () =>set(state =>({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  })),

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),
  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id)
  }))
}));
