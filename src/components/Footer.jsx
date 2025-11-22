import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Harika Vajrala. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
