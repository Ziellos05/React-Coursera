import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';


    function RenderDish({dish}) {

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

    const DishDetail = (props) => {
        return (
            <div>
                <RenderDish dish={props.selectedDish}/>
            </div>
        )
    };

export default DishDetail;