import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonial";
import Contactme from "../Contactme";
import Footer from "../Footer";
export default function Home (){
    return(
        <>
        <Navbar />
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <Testimonial />
        <Contactme />
        <Footer />
        </>
    )
}