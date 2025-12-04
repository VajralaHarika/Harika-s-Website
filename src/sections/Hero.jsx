import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Harika <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Vajrala</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            I am looking for new opportunities to work with talented people and build innovative products.                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="#contact"
                                className="group px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all flex items-center"
                            >
                                Contact Me
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} href="mailto:harikavajrala49@gmail.com" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1eiBdLBqfZA1qE0syseHXL6YrghP3U_oF/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center"
                            >
                                Resume
                                <Download className="ml-2" size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-72 h-72 md:w-96 md:h-96"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-800 p-2 shadow-2xl transition-colors duration-300">
                            {/* Profile image */}
                            <div className="w-full h-full rounded-full border-4 border-white dark:border-gray-700 shadow-xl overflow-hidden">
                                <img
                                    src={profileImage}
                                    alt="Harika Vajrala"
                                    className="w-full h-full object-cover transform scale-125 hover:scale-135 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
