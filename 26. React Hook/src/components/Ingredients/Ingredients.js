import React, { useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const filterIngredients = useCallback(ingredientsRecived => {
    setUserIngredients(ingredientsRecived)
  }, [])

  const addIngredientsHandler = (ingredients) => {
    fetch('https://react-hook-703b5-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredients),
      headers: { 'Content-type': 'application/json' }
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(preventState => [...preventState, { id: responseData.name, ...ingredients }])
    })
  }
  return (
    <div className="App">
      <IngredientForm addIngredients={addIngredientsHandler} />

      <section>
        <Search onLoadIngredients={filterIngredients} />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => { }} />
      </section>
    </div>
  );
}

export default Ingredients;
