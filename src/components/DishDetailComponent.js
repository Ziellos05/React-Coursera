import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function DishDetail( props ) {

  const dishComments = props.comments.map((comment) => {
                comment.date = new Date()
                return (
                  <div key={comment.id} className="col">
                      <p1 className="row">{comment.comment}</p1>
                      <p2 className="row">-- {comment.author}, {(comment.date).toDateString()}</p2>
                  </div>
                );
              });

  return (
    <div className="container">
      <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
      <div className="row">
        <Card className="col-12 col-md-5 m-1">
          <CardImg width="100%" object src={props.dish.image} alt={props.dish.name} />
          <CardBody>
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
          </CardBody>
        </Card>
        <Card className="col-12 col-md-5 m-1">
          <CardTitle>Comments</CardTitle>
          <CardText>{dishComments}</CardText>
        </Card>
      </div>
    </div>
  );
}

export default DishDetail;
