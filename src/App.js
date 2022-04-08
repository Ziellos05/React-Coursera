import React, { Component } from "react";
import Menu from "./components/MenuComponent";
import "./App.css";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import { BrowserRouter } from "react-router-dom";
import { DISHES } from "./shared/dishes";
import Home from "./components/HomeComponent";
import { Routes, Route } from "react-router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route
              exact
              path="/menu"
              element={<Menu dishes={this.state.dishes} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
