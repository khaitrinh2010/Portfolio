import {ThemeToggle} from "@/components/theme-toggle.jsx";
import {StartBackground} from "@/components/StartBackground.jsx";
import {NavBar} from "@/components/nav-bar.jsx";
import {HeroSection} from "@/components/hero-section.jsx";
import {AboutMe} from "@/components/about-me.jsx";
import {SkillSection} from "@/components/skills.jsx";
import {ProjectSection} from "@/components/projects.jsx";
import {ContactSection} from "@/components/contact-section.jsx";

export const Home  = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StartBackground />
            <NavBar />
            <main>
                <HeroSection />
                <AboutMe />
                {/* Add other sections like Skills, Projects, Contact here */}
                <SkillSection />
                <ProjectSection />
                <ContactSection />
            </main>
        </div>
    );
}
