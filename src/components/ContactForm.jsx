import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: true
      },
      emailmessage: null
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      content: {
        ...this.state.content,
        [name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content.honeypot) {
      const template = "template_CMVqNTwQ";
      this.sendEmail(template, this.state.content);
    } else {
      console.log("You fucking fuck!");
    }
  };

  sendEmail = (template, content) => {
    window.emailjs
      .send("gmail", template, content)
      .then(res => {
        this.setState({
          content: {
            name: "",
            email: "",
            phone: "",
            message: ""
          },
          emailmessage: "Email successfully sent!"
        });
      })
      .catch(err => {
        this.setState({
          emailmessage:
            "Apologies, please check the 'About Us' window to find alternative ways to contact me."
        });
        console.error(err);
      });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="text">Name</label>
        <input
          className="form-input"
          type="text"
          name="name"
          value={this.state.content.name}
          onChange={e => this.onChange(e)}
          onMouseDown={e => e.stopPropagation()}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          value={this.state.content.email}
          onChange={e => this.onChange(e)}
          onMouseDown={e => e.stopPropagation()}
        />
        <label htmlFor="phone">Phone</label>
        <input
          className="form-input"
          type="text"
          name="phone"
          value={this.state.content.phone}
          onChange={e => this.onChange(e)}
          onMouseDown={e => e.stopPropagation()}
        />
        <label htmlFor="message">Message</label>
        <input
          className="form-text"
          type="textarea"
          name="message"
          value={this.state.content.message}
          onChange={e => this.onChange(e)}
          onMouseDown={e => e.stopPropagation()}
          required
          wrap="hard"
        />
        <input type="hidden" name="honeypot" />
        <div className="form-footer">
          <button className="contact-button">Send</button>
          {this.state.emailmessage && (
            <p className="email-message">{this.state.emailmessage}</p>
          )}
        </div>
      </form>
    );
  }
}

export default ContactForm;
