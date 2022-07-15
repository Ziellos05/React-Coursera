import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                    <div className="nav-color"><h5>Links</h5></div>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                    <div className="nav-color">
                        <h5>Our Address</h5>
                        </div>
                        <address className='footer-color'>
                        A portal between Xen and Earth, Arizona desert<br />
                        Black Mesa, not a copy of Aperture Science<br />
                        Moving to the City 17<br />
                        <i className="fa fa-phone fa-lg"></i>: +57 3167178288<br />
                        <i className="fa fa-fax fa-lg"></i>: Who uses fax on 2022?<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:rolandandresortega@gmail.com">
                            rolandandresortega@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-github" href="https://github.com/Ziellos05"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/roland-andr%C3%A9s-ortega-ayala/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:rolandandresortega@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>Web page made by Ziellos05 in the Full-Stack Web Development with React Specialization, Hong Kong University / Coursera</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;