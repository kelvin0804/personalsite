import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    emailjs.init('hdewkEI-ROYg4P5qn'); // 初始化 EmailJS
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      to_name: 'WK',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_7qd0vra',
      'template_enfsj3t',
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently available for freelance work and full-time positions.
              If you have a project that you want to get started, think you need my help
              with something or just fancy saying hey, then get in touch.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <a href="mailto:wkl0804@gmail.com">wkl0804@gmail.com</a>
              </div>
              <div className="contact-method">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/wen-kai-0694b464/" target="_blank" rel="noopener noreferrer">
                  linkedin logo
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-button ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 
                 status === 'success' ? 'Sent!' : 
                 status === 'error' ? 'Failed to send' : 
                 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 