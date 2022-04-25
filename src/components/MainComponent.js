import React, { Component } from "react";
import Menu from "./MenuComponent";
import "../App.css";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Home from "./HomeComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { Routes, Route } from "react-router";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishN) {
    this.setState({ dishId: dishN });
  }

  render() {

    const HomePage = () => {
      return <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
      promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
      leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>;
    };

    const DishWithId = () => {
      return(
          <DishDetail dish={this.state.dishes[(window.location.pathname).substr(-1)]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(((window.location.pathname).substr(-1)),10))} />
      );
    };

    return (
      <div>
          <Header />
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route
              exact
              path="/aboutus"
              element={<About leaders={this.state.leaders}/>}
            />
            <Route
              exact
              path="/menu"
              element={<Menu dishes={this.state.dishes} />}
            />
            <Route path='/menu/:dishId' element={<DishWithId />} />
            <Route
              exact
              path="/contactus"
              element={<Contact />}
            />
          </Routes>
          <Footer />
      </div>
    );
  }
}

export default Main;