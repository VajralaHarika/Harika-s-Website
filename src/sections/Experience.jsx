import React from 'react';
import Section from '../components/Section';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Michigan Technological University",
            period: "Aug 2024 - Aug 2025",
            description: [
                "Architected a distributed AI pipeline on Google Cloud Platform (GCP), integrating Elasticsearch and storage services to optimize data retrieval while ensuring regulatory compliance.",
                "Built high-precision domain adaptation models using TensorFlow,PyTorch, and C++,implementing UDP protocols to ensure seamless, low-latency data communication.",
                "Engineered RESTful APIs and automated ETL workflows to expose ML models as microservices and normalize multi-source datasets, reducing preprocessing time.",
                "Designed scalable data modeling solutions and documented system architecture to support consistent software scalability and facilitate cross-team collaboration."
            ]
        },
        {
            title: "Lab Instructor",
            company: "Michigan Technological University",
            period: "Aug 2025 - Present", // Note: Resume says 2025, keeping as is but might be a typo in resume for 2024 or future date
            description: [
                "Mentored 70+ students in Java (OOP), conducting technical code reviews to enforce industry standards and clean code best practices.",
                "Directed algorithmic problem-solving and QA sessions, guiding students through advanced debugging to optimize code efficiency and memory management."
            ]
        },
        {
            title: "Software Engineer",
            company: "Avishkar Tech Solutions",
            period: "July 2021 - July 2022",
            description: [
                "Full Stack Development: Engineered responsive front-end modules using React, Angular, and TypeScript, integrating them with a scalable Node.js backend and PostgreSQL database.",
                "API & System Design: Designed and implemented RESTful Web Services to digitize organizational kitting processes optimizing the software pipeline for high-volume inventory management.",
                "Real-Time Communication: Integrated Pub/Sub messaging protocols to enable real-time notifications, enhancing system responsiveness and team collaboration.",
                "QA & Testing: Conducted rigorous unit testing and peer code reviews, successfully identifying and troubleshooting critical bugs prior to deployment to ensure 99% system reliability.",
                "Agile Collaboration: Partnered with cross-functional teams to translate client feedback into technical features, ensuring the final product aligned with business requirements."
            ]
        },
        {
            title: "RPA Intern",
            company: "AICTE-Eduskills RPA Blue Prism Virtual Internship",
            period: "April 2021 - June 2021",
            description: [
                "RPA Development: Engineered Robotic Process Automation (RPA) solutions using Blue Prism to automate repetitive workflows, significantly reducing operational errors and processing time.",
                "Bot Lifecycle Management: Led the end-to-end development of bots—from process analysis and configuration to rigorous testing and deployment—ensuring high reliability and scalability.",
                "Compliance & Optimization: Focused on process industrialization, ensuring all automation scripts adhered to strict data privacy regulations and configuration management standards."
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
