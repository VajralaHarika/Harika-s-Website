import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        HV
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-4 ml-4"
                        >
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:harikavajrala49@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                                <Mail size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 px-3 pt-4 border-t dark:border-gray-800 mt-4">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:harikavajrala49@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
