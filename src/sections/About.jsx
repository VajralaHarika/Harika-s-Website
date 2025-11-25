import React from 'react';
import Section from '../components/Section';
import { GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <Section id="about" className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        <p>
                            A Computer Science graduate student and Software Engineer blending Full Stack Development with Machine Learning expertise. I specialize in building cloud-native backends and distributed AI pipelines using Java, Python, C++, and GCP. Motivated by solving complex system challenges, I am actively looking for full-time opportunities to build scalable software solutions.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                        <GraduationCap className="mr-3 text-blue-600 dark:text-blue-400" />
                        Education
                    </h3>
                    <div className="space-y-8">
                        <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Master’s in Computer Science</h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">Michigan Technological University</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Houghton, Michigan, USA</p>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">CGPA: 3.88/4</p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science</h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">Koneru Lakshmaiah Education Foundation</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Vijayawada, AP</p>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">CGPA: 8.57/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
