import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import  Footer  from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
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