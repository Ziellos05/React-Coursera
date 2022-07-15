import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { Fade, Stagger } from "react-animation-components";

function RenderLeader({ leader }) {
  return (
    <Media tag="li">
      <Media left middle>
        <Media object src={baseUrl + leader.image} alt={leader.name} />
      </Media>
      <Media body className="ml-5">
        <Media heading>{leader.name}</Media>
        <p>{leader.designation}</p>
        <p>{leader.description}</p>
      </Media>
    </Media>
  );
}

function LeaderList(props) {
  const leaders = props.leaders.leaders.map((leader) => {
    return (
      <Fade in key={leader._id}>
        <div className="col-12 mt-2">
          <RenderLeader leader={leader} />
        </div>
      </Fade>
    );
  });

  if (props.leaders.isLoading) {
    return <Loading />;
  } else if (props.leaders.errMess) {
    return (
      <div className="col-12">
        <h4>{props.leaders.errMess}</h4>
      </div>
    );
  } else {
    return (
      <Media list>
        <Stagger in>{leaders}</Stagger>
      </Media>
    );
  }
}

function About(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">
              <div className="nav-color">Home</div>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            I wanna be honest, my imagination is over, so I'll use the classic
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            The restaurant traces its humble beginnings to{" "}
            <em>The Open BAR</em>, a successful chain started by our CFO, Mr.
            G Man, that featured for the first time the world's best
            cuisines in a portal.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="card-color nav-color">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">19 Nov. 1998</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">Combine Alliance</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">Eart and the whole dimension</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">8 billion at the end of 2022</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">"..."</p>
                <footer className="blockquote-footer">
                  Gordon Freeman,
                  <cite title="Source Title">
                    The Wit and Wisdom of Gordon Freeman, Valve Editorial, 2004
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
        </div>
        <LeaderList leaders={props.leaders} />
      </div>
    </div>
  );
}

export default About;
