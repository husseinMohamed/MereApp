import React, { Component } from 'react';
import Header from './components/header';
import Homepage from './components/homepage';
import RecipeBox from './components/RecipeBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from'./logo.png';
import './App.css';


const API_KEY = "6dfbfa32abca0862067d92cf24e19f7f";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      recipes:[],
      input: ''
    }
  }


  dataGet =(e) => {
    this.setState({
      input: e.target.value
    });
  }

  getRecipe = async () =>{
   
    const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${this.state.input}&count=10`);
    // console.log(this.state.input);

    const data = await apiCall.json();
    // console.log(data.recipes);
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
  }
   


  render() {
    
    return (
      <div className="App">
      <Header logo = {icon}/>
      <Homepage getData ={this.dataGet} recieveRecipe={this.getRecipe}/>
      <div className = "container">
      <div className ="row">
      {this.state.recipes.map((recipe) => {
        return (
          <RecipeBox key={recipe.recipe_id} 
                     val={recipe.recipe_id}
                     title={recipe.title}
                     publisher={recipe.publisher}
                     img={recipe.image_url}
                     link={recipe.source_url}
                     publisherLink={recipe.publisher_url}/>
               );
             })}
      </div>
      </div>
      </div>
    );
  }
}

export default App;
//<p key={recipe.recipe_id}> {recipe.title}</p>

// a500944c4e6c102db29d13713af0f99a\

// https://www.food2fork.com/api/search?key=a500944c4e6c102db29d13713af0f99a&q=chicken%20breast
