import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component{
  render() {
    const {onDelete} = this.props;
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={r.id} {...r} onDelete={onDelete} />
    ));
    return(
      <div className="cards">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
