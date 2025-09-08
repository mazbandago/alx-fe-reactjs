import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false); // Reset confirmation on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%', height: '100px' }}
        />
        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            backgroundColor: isFormValid ? '#007BFF' : '#ccc',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: isFormValid ? 'pointer' : 'not-allowed'
          }}
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          <h3>Thank you, {formData.name}!</h3>
          <p>We’ve received your message and will get back to you at <strong>{formData.email}</strong>.</p>
        </div>
      )}

      <div style={{ marginTop: '30px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
        <h4>Live Preview:</h4>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    </div>
  );
}

export default Contact;
