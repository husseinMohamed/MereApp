import React, { Component } from 'react'
import Header from './header';
import icon from'../logo.png';
import { Link } from "react-router-dom";


const API_KEY = "6dfbfa32abca0862067d92cf24e19f7f";

class RecipeOne extends Component {
    state = { 
        newRecipeArr : []
     }

     componentDidMount = async () => {
         const title = this.props.location.state.recipeTitle;
       
        const apiCallTwo = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        
    
        const results = await apiCallTwo.json();
         //grab first elem in array ( may be more than one recipe if same name found)
         //console.log(results.recipes[0]);
         this.setState({
           newRecipeArr: results.recipes[0]
         });
        // console.log(this.state.newRecipeArr);
     }
    render() { 
        const Recipe = this.state.newRecipeArr;
        return ( 
            <div>
              <Header logo={icon}/>
              <br /> 
              <div className = "container">
                <button className = "btn btn-dark"> <Link style={{color:"white"}} to={{ pathname: `/`}}>New Search</Link></button>
              </div>
              <br /><br/>
               <div className ="container">
                <div className ="row">
                 <div className="card border-light mb-3" style={{width: 45+"rem"}}>
                  <h5 className="card-title " >{Recipe.title}</h5>
                   <img style={{borderRadius: "10px"}}className="card-img-top" src={Recipe.image_url} alt="Card image cap" />
                    <div className="card-body">
                     <p><strong>Publisher: </strong>
                      <a style={{color: "lightskyblue"}}href={Recipe.publisher_url}>{Recipe.publisher}</a></p>
                       <p className="card-text"></p>
                        <p><strong>Website: </strong><a href={Recipe.source_url} >{Recipe.source_url} </a></p>
                   </div>
                 </div>
               </div>
              </div>
            </div>
         );
    }
}
 
export default RecipeOne;

