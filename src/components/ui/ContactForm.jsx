import { useState } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        'bot-field': ''
    });

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
            'bot-field': ''
        });
    }

    const onChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
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
                alert('Thank you! Your message has been sent successfully.');
                console.log('form data:', formData);
                // Reset the form after successful submission
                resetForm();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again.');
        }

    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input name='bot-field' value={formData['bot-field']} onChange={onChange} hidden />
            <div className='form-group '>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    required
                    placeholder="Your full name"
                    autoComplete="name"
                />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                    placeholder="Your email address"
                    autoComplete="email"
                />
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    required
                    placeholder="Your message"
                    rows="4"
                    autoComplete="off"
                ></textarea>
            </div>
            <Button type="submit" className="btn-primary">Submit</Button>

        </form>
    )

}