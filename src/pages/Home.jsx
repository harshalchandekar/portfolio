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

        {/* Main Content */}

        {/* Footer */}
        </div>
    )
}

export default Home;