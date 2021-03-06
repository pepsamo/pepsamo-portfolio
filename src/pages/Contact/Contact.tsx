import * as React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => 
      {return (<div className="row">
        <div className="col-xs-12">
          <div className="section-container-spacer text-center">
            <h2>Contatti</h2>
          </div>
          
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <form action="" className="reveal-content">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" rows={ 5 } placeholder="Enter your message"></textarea>
                      </div>
                      <button type="submit" className="btn btn-default btn-lg">Send</button>
                    </div>
                    <div className="col-md-5 address-container">
                      <ul className="list-unstyled">
                        <li>
                          <span className="fa-icon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                          </span>
                          + 33 9 07 45 12 65
                        </li>
                        <li>
                          <span className="fa-icon">
                            <i className="fa fa-at" aria-hidden="true"></i>
                          </span>
                          e-mail@mail.io
                        </li>
                        <li>
                          <span className="fa-icon">
                            <i className="fa fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                          42 rue Moulbert 75016 Paris
                        </li>
                      </ul>
                      <h3>Follow me on social networks</h3>
                      <a href="http://www.facebook.com" title="" className="fa-icon">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="http://www.twitter.com" title="" className="fa-icon">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="http://www.linkedin.com" title="" className="fa-icon">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </form>
            </div>
          </div>
      </div>
    </div>)}

export default Contact;
