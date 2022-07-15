import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    this.props.loginUser({
      username: this.username.value,
      password: this.password.value,
    });
    event.preventDefault();
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    const myStyle = {
      backgroundImage:
        "url('https://assets2.rockpapershotgun.com/black-mesa-xen-c.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/black-mesa-xen-c.jpg')",
      height: "275px",
      backgroundPosition: "center 5%",
      marginTop: "-40px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/Half-Life-logo.png"
                height="35"
                width="35"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <div className="nav-color">
                      <span className="fa fa-home fa-lg"></span> Home
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <div className="nav-color">
                      <span className="fa fa-info fa-lg"></span> About Us
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <div className="nav-color">
                      <span className="fa fa-list fa-lg"></span> Menu
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/favorites">
                    <div className="nav-color">
                      <span className="fa fa-linux fa-lg"></span> My Favorites
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <div className="nav-color">
                      <span className="fa fa-address-card fa-lg"></span> Contact
                      Us
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {!this.props.auth.isAuthenticated ? (
                    <Button outline onClick={this.toggleModal}>
                      <div className="nav-color">
                        <span className="fa fa-sign-in fa-lg"></span> Login
                      </div>
                      {this.props.auth.isFetching ? (
                        <span className="fa fa-spinner fa-pulse fa-fw"></span>
                      ) : null}
                    </Button>
                  ) : (
                    <div>
                        <div className="navbar-text mr-3">
                        <div className="nav-color">
                          {this.props.auth.user.username}
                          </div>
                      </div>
                      <Button outline onClick={this.handleLogout}>
                        <div className="nav-color">
                          <span className="fa fa-sign-out fa-lg"></span> Logout
                        </div>
                        {this.props.auth.isFetching ? (
                          <span className="fa fa-spinner fa-pulse fa-fw"></span>
                        ) : null}
                      </Button>
                    </div>
                  )}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron style={myStyle}>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Gordon Freeman Gourment</h1>
                <p>
                Perhaps you have wondered why Half Life 3 has not been released, the answer is simple, Gordon Freeman, the chosen one, is tired of running with a bar through vents and doing bunny jumps around the field, he has decided that it is time to put his feet back on the ground and have a real job, just like me, Ziellos05.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
