import React, { Component } from 'react'
import './homepage.css';

class Homepage extends Component {
   
    //  data = (e) =>{
    //      this.setState({
    //          input: e.target.value
    //      })
    //  }
     render() { 
         return (  
    <div className="headerTop">
      <div className="d-block" >
       <div className="container">
       <br />
       <h1 className ="title">Mere.</h1>
       <p className="headerMoto">One stop shop for all the recipes</p>
       <br />
        <div className="input-group input-group-lg">
          
           <input type="text" className="form-control" onChange={this.props.getData} placeholder="Search recipes.."aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            <div className="input-group-prepend">
             <button type="button"className="btn btn-dark " onClick={this.props.recieveRecipe} >Search</button>
            
            </div>
         </div>
       </div>
      </div>
      <br />
      
    </div>
  

         );
     }
 }
  
 export default Homepage;