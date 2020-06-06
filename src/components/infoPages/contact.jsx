import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", name: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <>
        <ToastContainer />
        <form className="test-mailing">
          <h1>Contact Us</h1>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                className="form-control"
                placeholder="Your Email Address"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-12 form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                onChange={this.handleChange}
                placeholder="Write your message here"
                required
                value={this.state.message}
              />
            </div>
          </div>
          <button
            type="button"
            value="Submit"
            className="btn btn-danger my-2 my-sm-0"
            onClick={this.handleSubmit}
          >
            Send Message
          </button>
        </form>
      </>
    );
  }

  handleChange(event) {
    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "message":
        this.setState({ message: event.target.value });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    const templateId = "template_vrgTk1Ew";

    const { name, email, message } = this.state;

    if (name.length === 0) {
      toast.error("Name is required");
      return;
    }
    if (email.length === 0) {
      toast.error("Email is required");
      return;
    }
    if (message.length === 0) {
      toast.error("Message is required");
      return;
    }

    this.setState({ message: "", name: "", email: "" });

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        toast.success("Email successfully sent!");
      })
      .catch((err) => toast.error("Oh no, an error occured! Details:", err));
  }
}
