import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from '../App';
import RecipeOne from './RecipeOne';

class Router extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
            <Switch>
              <Route path="/" component={App} exact />
              <Route path="/recipe/:id" component={RecipeOne} />
            </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Router;