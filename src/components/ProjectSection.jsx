import { ArrowRight, ExternalLink, Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id:1,
        title: "Converso A Saas App",
        description:"A modern, scalable, and feature-rich SaaS platform designed to empower users with seamless companion management and personalized learning journeys.",
        image:"/projects/project1.png",
        tags:[" Next.js", "React", "TypeScript", "Tailwind CSS","Supabase"],
        demoUrl:"https://converso-rosy-chi.vercel.app/",
        githubUrl:"https://github.com/harshalchandekar/Converso",
    },
    {
        id:2,
        title: "PrepWise",
        description:"PrepWise is an AI-powered mock interview platform that simulates real interview experiences and provides instant feedback to help users prepare and excel in their job interviews.",
        image:"/projects/project2.png",
        tags:[" Next.js", "TypeScript", "Tailwind CSS","Firebase","Vapi SDK"],
        // demoUrl:"#",
        githubUrl:"https://github.com/harshalchandekar/PrepWise",
    },
    {
        id:3,
        title: "WanderLust",
        description:"A full-stack web application for listing and reviewing properties, built with Node.js, Express, MongoDB, EJS, Passport.js, and Cloudinary.",
        image:"/projects/project3.png",
        tags:[" Node.js", "Mongo DB", "Express.js", " EJS"],
        // demoUrl:"#",
        githubUrl:"https://github.com/harshalchandekar/Project_wanderlust",
    },
    {
        id:4,
        title: "Employee Management System (EMS)",
        description:"A simple frontend React + Vite + Tailwind CSS application for managing employees and tasks, with role-based dashboards for Admin and Employees.",
        image:"/projects/project4.png",
        tags:["React", "Vite", "Tailwind CSS"],
        // demoUrl:"#",
        githubUrl:"https://github.com/harshalchandekar/Ems",
    },
    {
        id:5,
        title: "Weather App",
        description:"This is a simple React mini project created with Vite. It demonstrates the use of Material UI components and includes a weather app feature.",
        image:"/projects/project5.png",
        tags:["React.js","Tailwind CSS"],
        // demoUrl:"#",
        githubUrl:"https://github.com/harshalchandekar/WeatherApp",
    },
    {
        id:6,
        title: "Uber Clone",
        description:"Effortless ride booking and real-time ride status updates.",
        image:"/projects/project6.png",
        tags:["Mongo DB" , "Express.js", "React.js", "Node.js"],
        // demoUrl:"#",
        githubUrl:"https://github.com/harshalchandekar/Uber",
    },
];


const ProjectSection = () => {
    return (
       <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="mb-6">Here are some of my recent projects. Each project was carefully 
                    crafted with attention to detail, performance, and user experience.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                               
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    </div>
                                     </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                         href="https://github.com/harshalchandekar"
                         target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            <FaGithub size={16} />
                            Check My Github <ArrowRight size={16} />
                        </a>
                    </div>
            </div>
       </section>
    )
} 
export default ProjectSection;