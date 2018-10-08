import React, { Component } from 'react';
import './header.css';


class Header extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light">
             <div className = "container">
              <a className="navbar-brand" >
               <img src={this.props.logo} width="40" height="40" alt="" />
              </a>
               <p className="name"style={{float:"right" ,color:"white"}}>by hussein mohamed</p>
             </div>
            </nav>
        );
        }}
export default Header;

