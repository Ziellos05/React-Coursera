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
import { postFeedback, postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders())
});

class Main extends Component {

  onDishSelect(dishN) {
    this.setState({ dishId: dishN });
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {

    const HomePage = () => {
      return (<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
      leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
      leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}
      />);
    };

    const DishWithId = () => {
      return(
          <DishDetail dish={this.props.dishes.dishes[(window.location.pathname).substr(-1)]}
          isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(((window.location.pathname).substr(-1)),10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment} />
      );
    };

    return (
      <div>
          <Header />
          <TransitionGroup>
            <CSSTransition classNames="page" timeout={300}>
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route
              exact
              path="/aboutus"
              element={<About leaders={this.props.leaders}
              />}
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
              element={<Contact postFeedback={this.props.postFeedback}/>}
            />
          </Routes>
          </CSSTransition>
          </TransitionGroup>
          <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
