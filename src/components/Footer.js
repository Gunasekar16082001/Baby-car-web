import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [problems, setProblems] = useState('');
  const [city, setCity] = useState('');
  const [otherProblems, setOtherProblems] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary actions with the form data here
    console.log({
      name,
      email,
      mobile,
      problems,
      city,
      otherProblems,
    });
  };

  return (
    <div className="contact-form-container">
      <div className="form-left">
        <div className="card">
          <h2>Name</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="card">
          <h2>Email</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="card">
          <h2>Mobile</h2>
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div className="card">
          <h2>Please Provide Your Problems</h2>
          <label>
            <input
              type="radio"
              value="Low Sperm Count"
              checked={problems === 'Low Sperm Count'}
              onChange={(e) => setProblems(e.target.value)}
            />
            Low Sperm Count
          </label>
          <label>
            <input
              type="radio"
              value="Other"
              checked={problems === 'Other'}
              onChange={(e) => setProblems(e.target.value)}
            />
            Other
          </label>
          {problems === 'Other' && (
            <textarea
              value={otherProblems}
              onChange={(e) => setOtherProblems(e.target.value)}
              placeholder="Explain Other Problems"
            />
          )}
        </div>
      </div>
      <div className="form-right">
        <div className="card">
          <h2>City Name</h2>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="talk-to-experts">
          <h2>I want to talk to an Expert</h2>
          {/* You can add any additional content or functionality here */}
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
