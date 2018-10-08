import React, { Component } from 'react'
import { Link } from "react-router-dom";


class RecipeBox extends Component {
  
    
    render() { 
        return ( 
            
               <div className = "col-lg-4 col-md-6 col-sm-12">
               <div className="card" style={{width: 19.5+'rem', display:'inline-block', margin:"6px"}}>
                <img className="card-img-top" style={{height: 16+'rem'}} src={this.props.img} alt={this.props.title} />
                 <div className="card-body">
                  <h5 className="card-title">
                  {this.props.title.length < 20 ? `${this.props.title}` : `${this.props.title.substring(0,25)}...`}
                  </h5>
                  <p><strong>Publisher: </strong>
                  <a style={{color: "lightskyblue"}}href={this.props.publisherLink}>{this.props.publisher}</a></p>
                   <button className="btn btn-dark">
                   <Link style={{color:"white"}} to={{ pathname: `/recipe/${this.props.val}`,
                  state: { recipeTitle : this.props.title }
                }}>View Recipe</Link></button>
                 </div>
               </div> 
                
              </div>
            
         );
    }
}
 
export default RecipeBox;

