import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

// COMPONENTS
import HomePage from 'containers/HomePage';


class Routes extends Component {
  render() {
    return (
      <Switch >
        <Route className='app-wrapper' exact path='/' component={HomePage}/>

        <Route render={() => {
          return (
            <div className='mainContainer'>
              <h1>404 Page Not Found</h1>
            </div>
          )
        }}/>
      </Switch>
    )
  }
}
export default Routes
