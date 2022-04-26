import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    const dishComments = this.props.comments.map((comment) => {
      comment.date = new Date();
      return (
        <div key={comment.id} className="col">
          <p1 className="row">{comment.comment}</p1>
          <p2 className="row">
            -- {comment.author}, {comment.date.toDateString()}
          </p2>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <Card className="col-12 col-md-5 m-1">
            <CardImg
              width="100%"
              object
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
          <Card className="col-12 col-md-5 m-1">
            <CardTitle>Comments</CardTitle>
            <CardText>{dishComments}</CardText>
            <Button outline onClick={this.toggleModal}>
              <span className="fa fa-pencil-square-o"></span> Submit Comment
            </Button>
          </Card>
        </div>
        <div className="row">
          {
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <Label for="rating">Rating</Label>
                    <Input type="select" name="rating" id="rating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      innerRef={(input) => (this.username = input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message">Your comment</Label>
                    <Input type="textarea" id="comment" name="comment" />
                  </FormGroup>
                  <Button type="submit" value="submit" color="primary">
                    Submit
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          }
        </div>
      </div>
    );
  }
}

export default DishDetail;
