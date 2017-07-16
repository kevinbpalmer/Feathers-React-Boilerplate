import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// components
import Routes from 'containers/Routes';
import Header from 'components/Header';
import Footer from 'components/Footer';

// actions
import {test} from 'actions/Test';

// stylesheet
import './globals.styl';

class App extends Component {
  componentDidMount() {
    // needed for material-ui
    injectTapEventPlugin();

    // test dispatch of a redux action
    this.props.dispatch(test());
    console.log(this.props);
  }

  render() {
    return (
       <Router>
         <MuiThemeProvider>
           <div className='app-root'>
             <Header />
             <div className='application-content-wrapper'>
               <Routes/>
             </div>
             <Footer/>
           </div>
         </MuiThemeProvider>
    </Router>
    );
  }
}

function mapStateToProps(store) {
  return {testProps: store.test.test};
}

export default withRouter(connect(mapStateToProps)(App));
