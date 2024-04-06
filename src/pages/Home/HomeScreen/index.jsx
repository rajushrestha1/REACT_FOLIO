import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
export default function Home (){
    return(
        <>
        <Navbar />
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        </>
    )
}