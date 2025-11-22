import React from 'react';
import Section from '../components/Section';
import { Code, Database, Cloud, Terminal, Layout, Shield, Globe, Server } from 'lucide-react';
import {
    SiPython, SiTypescript, SiJavascript, SiPostgresql, SiHtml5, SiCss3,
    SiReact, SiNodedotjs, SiGraphql, SiMysql, SiMongodb,
    SiDocker, SiGit, SiGithubactions, SiTerraform,
    SiFastapi, SiDjango, SiFlask, SiTailwindcss, SiRedux
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="text-blue-600" />,
            skills: [
                { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> }
            ]
        },
        {
            title: "Frameworks",
            icon: <Layout className="text-purple-600" />,
            skills: [
                { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
                { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
                { name: "Flask", icon: <SiFlask className="text-gray-600 dark:text-white" /> },
                { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
                { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> }
            ]
        },
        {
            title: "Databases",
            icon: <Database className="text-green-600" />,
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
                { name: "SQL", icon: <Database className="text-gray-500" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud className="text-sky-600" />,
            skills: [
                { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
                { name: "Azure", icon: <VscAzure className="text-[#0078D4]" /> },
                { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
                { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
                { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> },
                { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC]" /> }
            ]
        },
        {
            title: "Other",
            icon: <Terminal className="text-orange-600" />,
            skills: [
                { name: "RESTful APIs", icon: <Globe className="text-gray-500" /> },
                { name: "Microservices", icon: <Server className="text-gray-500" /> },
                { name: "CI/CD", icon: <Terminal className="text-gray-500" /> },
                { name: "Web Security", icon: <Shield className="text-green-600" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> }
            ]
        }
    ];

    return (
        <Section id="skills" className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    A comprehensive toolkit for building modern, scalable applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm mr-4">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors group"
                                >
                                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </span>
                                    <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
