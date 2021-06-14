import React, { Component } from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v04ljqh",
        "template_4dbndta",
        e.target,
        "user_dthAT5a2CfaDOLy7VSVD7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send Message To Me</h5>
                      </div>
                      <div>
                        <Form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="InputName">Name</label>
                            <input
                              name="name"
                              type="text"
                              id="contactNameInput"
                              className="form-control"
                              placeholder="James Bond"
                              value={name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="InputEmail">Email</label>
                            <input
                              name="email"
                              type="email"
                              id="contactEmailInput"
                              className="form-control"
                              placeholder="example@gmail.com"
                              value={email}
                              onChange={this.handleInputChange}
                            ></input>
                          </div>
                          <div className="form-group input-group-lg">
                            <label htmlFor="message">Message</label>
                            <textarea
                              name="message"
                              as="textarea"
                              rows="7"
                              className="form-control"
                              id="contactFormMessage"
                              value={message}
                              onChange={this.handleInputChange}
                            ></textarea>
                          </div>
                          <div>
                            <button
                              typ="submit"
                              id="contactSubmit"
                              className="btn btn-primary"
                              defaultValue="Send"
                            >
                              Send
                            </button>
                          </div>
                        </Form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <ul className="list-ico">
                          <li>
                            <span className="ion-ios-telephone"></span> (480)
                            330-5011
                          </li>
                          <li>
                            <span className="ion-email"></span> m.w.chou21@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/michelle-chou-ba1b2a52/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>
                                <i className="fab fa-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/choumrdh"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>
                                <i className="fab fa-github"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    );
  }
}

export default Contact;
