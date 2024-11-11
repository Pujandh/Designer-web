import React from 'react';
import './Contactform.css';
import InputField from './InputField';

const Contactform = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "58f839ef-9639-40ef-912a-90d558c9d860");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="grid-form">
          <div className="grid-item">
            <InputField desc="First Name*" name="name" />
          </div>
          <div className="grid-item">
            <InputField desc="Last Name*" name="lastName" />
          </div>
          <div className="grid-item">
            <InputField desc="Your Email" type="email" name="email" />
          </div>
          <div className="grid-item">
            <InputField desc="Subject*" name="subject" />
          </div>
        </div>
        <textarea
          placeholder="Message"
          rows={5}
          cols={77}
          className="message"
          name="message"
        ></textarea>
        <button className="form-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactform;
