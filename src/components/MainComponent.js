import React, { Component } from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

class Main extends Component {

  onDishSelect(dishN) {
    this.setState({ dishId: dishN });
  }

  render() {

    const HomePage = () => {
      return (<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
      promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
      leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>);
    };

    const DishWithId = () => {
      return(
          <DishDetail dish={this.props.dishes[(window.location.pathname).substr(-1)]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(((window.location.pathname).substr(-1)),10))}
          addComment={this.props.addComment} />
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
              element={<About leaders={this.props.leaders}/>}
            />
            <Route
              exact
              path="/menu"
              element={<Menu dishes={this.props.dishes} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
