import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import  Footer  from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import emailjs from "@emailjs/browser";
const Home = () => {

const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}, [])

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Toggle Theme */}
            <ThemeToggle />
        {/*  Background Effects  */}
            <StarBackground />
        {/* // NavBar */}
            <NavBar />
        {/* Main Content */}

            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        {/* Footer */}
        <Footer />
        </div>
    )
}

export default Home;