import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post('http://localhost:8080/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-gray-900 text-white font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && <p className="text-green-600 text-center text-sm">Message sent successfully!</p>}
                    {status === 'error' && <p className="text-red-600 text-center text-sm">Failed to send message. Please try again.</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
