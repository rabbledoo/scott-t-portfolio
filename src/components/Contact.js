import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: {errors} } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_vsbuGJEVgDbSuQKs9gddq";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {

    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form Sent Successfully!  I'll contact you as soon as possible ^_^"
        );
      })
      .catch((err) => console.error(`something went wrong ${err}`));
  };

  return (
    <div className="header-wrapper">
      <div className="contacts">
        <div className="text-center ">
          <h1>Contact Me</h1>
          <p>
            Please fill out the form and let me know how I can help. I will
            follow up as soon as possible.
          </p>
          <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-xs-12 ">
                {/*Name Input*/}
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength:{
                      value: 25,
                      message: "Please enter a name with fewer than 25 characters"
                    }
                  })}
                />
                
                {/*Phone Input*/}
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  {...register("phone", {
                    required: "Please enter your phone number",
                  })}
                />
                {/*Email Input*/}
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email"
                    }
                  })}
                />
                {/*Subject Input*/}
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", {
                    required: "Oops... you forgot to add the subject",
                  })}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                {/*Description TextArea*/}
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  {...register("description", {
                    required: "Please briefly describe how I can help ^_^",
                  })}
                />
                <button className="btn-main-offer contact-btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
