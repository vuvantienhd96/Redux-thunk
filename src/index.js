import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './store';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import  AddContact2  from './components/contacts/AddContact2';
import EditContact from './components/contacts/EditContact';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Contact Maneger" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route path="/contact/add" component={AddContact2} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
