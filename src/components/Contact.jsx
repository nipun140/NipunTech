import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/contact.css";
import Button from "@material-ui/core/Button";

//Contact funciton
const Contact = () => {
  //useState hook
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  //handle change event
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  //handle submit event
  function handleSubmit(event) {
    event.preventDefault(); //prevent the form to refresh when clicking submit
    let name = formData.name;
    let phone = formData.phone;
    let email = formData.email;
    let message = formData.message;
    alert(
      `my name is-->${name} , my number is-->${phone} , my email is-->${email} and my message-->${message}`
    );

    //reset the fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="container-fluid mt-2">
      <h1 className="text-center">Contacts Us</h1>
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="eg-Jhon"
                name="name"
                value={formData.name}
                required
                id="name"
              />
            </div>

            <div className="form-group">
              <label for="phone">Phone:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="eg-435345223"
                name="phone"
                value={formData.phone}
                required
                id="phone"
              />
            </div>

            <div class="form-group">
              <label for="email">Email address:</label>
              <input
                onChange={handleChange}
                type="email"
                class="form-control"
                id="email"
                name="email"
                value={formData.email}
                placeholder="name@example.com"
              />
            </div>

            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                onChange={handleChange}
                class="form-control"
                name="message"
                placeholder="enter your message"
                id="message"
                value={formData.message}
                rows="3"
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
