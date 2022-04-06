import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";



class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }


  
  renderDish(dish) {

    if (dish != null) {

        const dishComments = dish.comments.map((comment) => {
            comment.date = new Date()
            return (
              <div key={comment.id} className="col">
                  <p1 className="row">{comment.comment}</p1>
                  <p2 className="row">-- {comment.author}, {(comment.date).toDateString()}</p2>
              </div>
            );
          });

      return (
        <div className="row">
          <Card className="col-12 col-md-5 m-1">
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          <Card className="col-12 col-md-5 m-1">
            <CardTitle>Comments</CardTitle>
              <CardText>{dishComments}</CardText>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;