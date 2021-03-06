import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import NavBar from './NavBar';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Pasta",
          instructions: "Boil pasta, add sauce.",
          ingredients: ["Dried pasta", "Pasta Sauce"],
          img: "pasta.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Blend ingredients.",
          ingredients: ["Milk", "Ice cream"],
          img: "milkshake.jpg"
        },
        {
          id: 2,
          title: "Rice",
          instructions: "Cook rice in rice cooker.",
          ingredients: ["Rice", "Water"],
          img: "rice.jpg"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="RecipeApp">
        <NavBar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?
          <RecipeInput
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          /> : null}
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
