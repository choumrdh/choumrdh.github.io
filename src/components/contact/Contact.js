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
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <div>
              <div className="card-header text-center bg-dark text-white">
                <h3>Contact</h3>
              </div>
              <ul>
                <li>Personal Contact Information:</li>
                <li className="list-item">
                  <strong>Email: </strong>m.w.chou21@gmail.com
                </li>
                <li className="list-item">
                  <strong>Phone: </strong>480-330-5011
                </li>
              </ul>
            </div>
          </div>
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
                className="btn btn-info"
                defaultValue="Send"
              >
                Send
              </button>
              {/* {this.state.emailSent === true && (
                <p className="d-inline success-msg">Email Send</p>
              )}
              {this.state.emailSent === false && (
                <p className="d-inline err-msg">Email Not Send</p>
              )} */}
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
