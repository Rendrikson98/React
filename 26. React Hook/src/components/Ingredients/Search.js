import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('')

  useEffect(() => {
    const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch('https://react-hook-703b5-default-rtdb.firebaseio.com/ingredients.json' + query)
      .then(response => response.json())
      .then(responseData => {
        const loadIngredints = [];
        for (let key in responseData) {
          loadIngredints.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          })
        }
        onLoadIngredients(loadIngredints)
      })
  }, [enteredFilter, onLoadIngredients])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={e => setEnteredFilter(e.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
