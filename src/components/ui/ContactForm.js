import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Button from './Button';
import CustomAlert from './CustomAlert';
export default function ContactForm() {
    // State to manage form submission alert
    const [alert, setAlert] = useState({
        type: 'info',
        message: '',
        isVisible: false
    });
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        'bot-field': ''
    });
    const showAlert = (type, message) => {
        setAlert({
            type,
            message,
            isVisible: true
        });
    };
    const closeAlert = () => {
        setAlert({
            type: undefined,
            message: '',
            isVisible: false
        });
    };
    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
            'bot-field': ''
        });
    };
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    ...formData
                }).toString()
            });
            if (response.ok) {
                showAlert('info', 'Thank you for your message!');
                // Reset the form after successful submission
                resetForm();
            }
            else {
                throw new Error('Form submission failed');
            }
        }
        catch (error) {
            showAlert('error', 'Sorry, there was an error sending your message. Please try again.');
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(CustomAlert, { onClose: closeAlert, timer: 1000, ...alert, children: alert.message }), _jsxs("form", { onSubmit: handleSubmit, className: "contact-form", name: "contact", method: "POST", children: [_jsx("input", { name: 'bot-field', value: formData['bot-field'], onChange: onChange, hidden: true }), _jsxs("div", { className: 'form-group ', children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: onChange, required: true, placeholder: "Your full name", autoComplete: "name" })] }), _jsxs("div", { className: 'form-group', children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: onChange, required: true, placeholder: "Your email address", autoComplete: "email" })] }), _jsxs("div", { className: 'form-group', children: [_jsx("label", { htmlFor: "message", children: "Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: onChange, required: true, placeholder: "Your message", rows: 4, autoComplete: "off" })] }), _jsx(Button, { type: "submit", className: "btn-primary", children: "Submit" })] })] }));
}
