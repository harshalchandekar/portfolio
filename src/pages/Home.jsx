import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
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
        {/* Footer */}
        </div>
    )
}

export default Home;