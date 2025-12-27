import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formDataObj = new FormData();
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        formDataObj.append("message", formData.message);
        formDataObj.append("_subject", `Portfolio Message from ${formData.name}`);
        formDataObj.append("_template", "table");
        formDataObj.append("_captcha", "false");

        try {
            const response = await fetch("https://formsubmit.co/ajax/manjusri6526@gmail.com", {
                method: "POST",
                body: formDataObj,
                headers: {
                    "Accept": "application/json"
                }
            });

            const data = await response.json();
            console.log("FormSubmit Response:", data);

            if (data.success === "true" || data.success === true) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else if (data.message && data.message.includes("Activation")) {
                // If activation is needed, show a friendly message instead of an error icon
                alert("Almost there! FormSubmit has sent an activation email to manjusri6526@gmail.com. \n\nPlease check your inbox (and spam) and click 'Activate Form'. After that, your messages will send automatically!");
                setStatus('idle');
            } else {
                throw new Error(data.message || "Submission failed");
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert(`Error: ${error.message}`);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact">
            <div className="contact-header">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-description">
                    Have a project in mind or just want to say hi?<br />
                    <span>Let's Create a strong Network around us!!</span>
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-glass-card">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">
                                <User size={16} className="input-icon" />
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                <Mail size={16} className="input-icon" />
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                <MessageSquare size={16} className="input-icon" />
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${status}`}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <>Sending...</>
                            ) : status === 'success' ? (
                                <><CheckCircle size={20} /> Sent Successfully!</>
                            ) : status === 'error' ? (
                                <><AlertCircle size={20} /> Error Sending</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
