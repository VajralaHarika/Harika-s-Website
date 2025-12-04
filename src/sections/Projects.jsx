import React from 'react';
import Section from '../components/Section';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "University Bot",
            description: "Developed a RAG-based AI assistant using Python and LangChain to automate student support for admissions and campus navigation. Implemented vector search algorithms to retrieve real-time data from university handbooks, ensuring accurate, hallucination-free responses.",
            tags: ["Python", "LangChain", "Vector Database", "Prompt Engineering", "RAG", "Data Pipeline", "Git",],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Automatic Face Mask Detection",
            description: "Real-time face mask detection system using Machine Learning, TensorFlow, and OpenCV. Identifies masked vs. unmasked individuals from live video feeds.",
            tags: ["Python", "TensorFlow", "OpenCV", "HTML/CSS"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Travel Tourism and Hospitality",
            description: "Full-stack travel website for booking tickets and hotels. Features trip planning, real-time availability, and pricing management.",
            tags: ["HTML/CSS", "JavaScript", "SQL", "REST APIs"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Escape Room VR",
            description: "Immersive VR escape room for PCVR using Unity Engine. Features complex puzzles, 3D maze, and optimized game performance.",
            tags: ["Unity", "C#", "VR", "XR Interaction Toolkit"],
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <Section id="projects" className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Showcasing my work in AI, Web Development, and VR.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700">


                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                <div className="flex gap-2">
                                    <a href={project.links.github} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" title="View Code">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.demo} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
