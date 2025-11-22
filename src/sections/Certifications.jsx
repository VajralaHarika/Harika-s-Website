import React from 'react';
import Section from '../components/Section';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Developer Associate",
            issuer: "Amazon Web Services",
            link: "#"
        },
        {
            title: "J2EE Certification",
            issuer: "Wipro",
            link: "#"
        },
        {
            title: "Machine Learning",
            issuer: "Udemy",
            link: "#"
        },
        {
            title: "Microsoft Certified Azure Fundamentals",
            issuer: "Microsoft",
            link: "#"
        },
        {
            title: "Software Engineering",
            issuer: "JPMorgan",
            link: "#"
        },
        {
            title: "Generative AI",
            issuer: "Google Skills",
            link: "#"
        }
    ];

    return (
        <Section id="certifications" className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Certifications</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Professional certifications and technical achievements.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 dark:text-blue-400">
                                <Award size={24} />
                            </div>
                            <a href={cert.link} className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {cert.issuer}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
