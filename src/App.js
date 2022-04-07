import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import {DISHES} from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
        <div className="App">
          <Header/>
          <Menu dishes={this.state.dishes}/>
          <Footer/>
        </div>
    );
  }
}

export default App;
