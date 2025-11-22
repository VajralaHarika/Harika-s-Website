import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                            <a href="mailto:harikavajrala49@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                harikavajrala49@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                            <a href="tel:+19062314393" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                (906)-231-4393
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Michigan, USA
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t dark:border-gray-800">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h3>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <form className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
