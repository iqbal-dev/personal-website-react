import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";
import { useState } from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  }
  return (
    <div id="contact">
      <div>
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <form action="mailto:pkmdiqbal@gmail.com" method="post" name="sentMessage" enctype="text/plain" id="contactForm"  novalidate> 
		 <div class="control-group">
                    <div class="controls">
			<input  type="text" name="name" class="form-control" 
			   	   placeholder="Full Name" id="name" required
			           data-validation-required-message="Please enter your name" />
			  <p class="help-block"></p>
		   </div>
	         </div> 	
                <div class="control-group">
                  <div class="controls">
			<input  type="email" name="email" class="form-control" placeholder="Email" 
			   	            id="email" required
			   		   data-validation-required-message="Please enter your email" />
		</div>
	    </div> 	
			  
               <div class="control-group">
                 <div class="controls">
				 <textarea  rows="10" cols="100" name="message" class="form-control" 
                       placeholder="Message" id="message" required
		       data-validation-required-message="Please enter your message" minlength="5" 
                       data-validation-minlength-message="Min 5 characters" 
                        maxlength="999" style={{margin:'15px 0'}}></textarea>
		</div>
               </div> 		 
          <div id="success"> </div>
	    <button onSubmit={handleSubmit} style={{width:'200px',marginBottom:'80px',marginLeft:'50%',transform:'translateX(-50%)'}}type="submit" class="btn btn-primary pull-right">Send</button><br />

          </form>
      </div>
      {/* <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-3">
              <a href="mailto:pkmdiqbal@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="pkmdiqbal@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-3">
              <a href="https://www.linkedin.com/in/md-iqbal-hossain-39670b1a3/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-3">
              <a href="https://github.com/iqbal-dev" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.youtube.com/user/MrAkjha96/" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/akjha96" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/akjha132" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron> */}
    </div>
  );
};

export default ContactForm;
