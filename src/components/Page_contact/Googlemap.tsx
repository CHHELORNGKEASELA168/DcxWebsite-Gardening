import React, { useState } from 'react';
import "./style/Googlemap.css";

import { FiAlertCircle } from "react-icons/fi";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Googlemap: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <div className="contact-header-map">
                <div className="icon_map"><FiAlertCircle /></div>
                <h1 className="page-title-map">Oops! Something went wrong.</h1>
                <p className="page-subtitle-map">
                    This page didn't load Google Maps correctly. See the JavaScript console for technical details.
                </p>
            </div>

            <div className="contact-container">
                {/* Contact Form Section */}
                <div className="contact-form-card">
                    <h3>Get in Touch</h3>

                    {isSubmitted && (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <div className="success-content">
                                <h4>Thank You!</h4>
                                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            {/* <label htmlFor="message">Message *</label> */}
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                placeholder="Enter your message..."
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                {/* <label htmlFor="name">Full Name *</label> */}
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="email">Email Address *</label> */}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            {/* <label htmlFor="subject">Subject *</label> */}
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter the subject"
                            />
                        </div>

                        <button
                            type="submit"
                            className="submit-button-contact"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="loading-spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                'Send'
                            )}
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="contact-info-section">
                    <div className="contact-info-card">

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-icon"><MdOutlineHome /></div>
                                <div className="contact-detail-content">
                                    <h4>Buttonwood, California.</h4>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-icon"><MdOutlinePhoneIphone /></div>
                                <div className="contact-detail-content">
                                    <h4>Phone Number</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-icon"><MdOutlineMailOutline /></div>
                                <div className="contact-detail-content">
                                    <h4>support@colorlib.com</h4>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Googlemap;
