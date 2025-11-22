import React from 'react';
import Section from '../components/Section';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Graduate Research Assistant",
            company: "Michigan Technological University",
            period: "Aug 2024 - Aug 2025",
            description: [
                "Led distributed AI research for cross-institutional medical segmentation using Mayo and Tulane datasets.",
                "Built domain adaptation models with TensorFlow and PyTorch to handle imaging variations across centers.",
                "Focused on developing scalable software programs for multi-source data engineering within a cloud-based environment.",
                "Presented research to an external audience at university symposiums and contributed to development activity."
            ]
        },
        {
            title: "Teaching Assistant",
            company: "Michigan Technological University",
            period: "Aug 2025 - Present", // Note: Resume says 2025, keeping as is but might be a typo in resume for 2024 or future date
            description: [
                "Provided technical support and instruction on Java, Linux, and OOP.",
                "Delivered hands-on troubleshooting during lab sessions, resolving complex issues.",
                "Conducted code reviews and QA evaluations on assignments."
            ]
        },
        {
            title: "Software Development Intern",
            company: "Avishkar Tech Solutions",
            period: "July 2021 - Dec 2022",
            description: [
                "Built responsive front-end modules using React and TypeScript; integrated with Node.js backend and PostgreSQL.",
                "Implemented RESTful services, contributing to high-performance software pipeline design.",
                "Worked with a full-stack team focused on product features with direct feedback from stakeholders."
            ]
        },
        {
            title: "RPA Intern",
            company: "AICTE-Eduskills RPA Blue Prism Virtual Internship",
            period: "April 2021 - June 2021",
            description: [
                "Gained hands-on experience in Robotic Process Automation (RPA) using Blue Prism.",
                "Designed and developed bots to automate repetitive tasks, improving efficiency and accuracy.",
                "Implemented automation workflows using algorithms to streamline business processes."
            ]
        }
    ];

    return (
        <Section id="experience" className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Professional Experience</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    My journey in software development and research.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0 mb-12 last:mb-0 group">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>

                        <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-800 shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                            {/* Date (Desktop) */}
                            <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'} pt-1`}>
                                <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className="md:w-5/12 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700">
                                <div className="md:hidden mb-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-xs">
                                        {exp.period}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                                    <Briefcase size={16} className="mr-2 text-gray-400" />
                                    {exp.company}
                                </h4>
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
