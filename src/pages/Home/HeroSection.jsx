export default function HeroSection(){
    return(
       <section  id="heroSection" className="hero-section" >
        <div className="hero-section-content-box">
            <div className="hero-section-content">
                <p className="section-title"> Hey I'm Raju.

                </p>
                <h1 className="hero-section-title">
                    <span className="hero-section-title-color">Frontend </span>{""}
            <br />
            Developer
                </h1>
            <p className="hero-section-description">
                I am a motivated and versatile individual, always
                eager to take a new chellanges. Witha passion for
                learning. I'm dedicated to delevering high-quality
                results. With a positive attitude and growing mindset,
                I'm ready to make meaningful contribution and achieve
                great things.

            </p>



            </div>
            <button className=" btn-primary">Get In Touch</button>
       </div>
        <div className="hero-section-img">
            <img src="profile.png" alt="Hero Section" />
        </div>
       </section>
      
    );
}