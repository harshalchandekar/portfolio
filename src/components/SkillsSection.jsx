import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaDatabase, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiSupabase, SiVercel, SiPostman, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {cn} from "@/lib/utils"

const skills = [
    // Frontend
    { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" />, category: "frontend" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, category: "frontend" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, category: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="bg-black dark:text-white" />, category: "frontend" },

    // Backend
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "backend" },
    { name: "Express.js", icon: <SiExpress className=" text-white bg-black dark:text-gray-200" />, category: "backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, category: "backend" },
    { name: "SQL", icon: <FaDatabase className="text-blue-800" />, category: "backend" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "backend" },
    { name: "Supabase", icon: <SiSupabase className="text-green-500" />, category: "backend" },

    // Tools
    { name: "Git/GitHub", icon: <FaGithub className="text-white-800 bg-black dark:text-white" />, category: "tools" },
    { name: "VS Code", icon: <VscVscode className="text-blue-400"/>, category: "tools" },
    { name: "Postman", icon: <SiPostman className="text-orange-400" />, category: "tools" },

    // AI and Automation Tools
    { name: "Vapi AI", icon: <SiVercel className="text-black bg-gray-500 dark:text-white" />, category: "automationTools" },
    { name: "Clerk", icon: <SiVite className="text-yellow-400" />, category: "automationTools" },

    // Other Languages
    {name:"Java", icon: <FaJava/>, category:"all"}
];

const categories = ["all", "frontend", "backend", "tools", "automationTools"];

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
           <div className="container mx-auto max-w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               My <span className="text-primary"> Skills</span> 
            </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => (
                        <button
                         key={key}
                         onClick={() => setActiveCategory(category)}
                         className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                         )}>
                            {category}
                            </button>
                    ))}
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4 flex items-center gap-3">
                            {skill.icon}
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </section>
    )
}
export default SkillsSection;