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
            <p className="hero-section-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam tempora eos, rerum qui dolorum dolorem asperiores, totam reiciendis est sunt optio doloremque dignissimos alias ea at cumque voluptatem inventore error.
            </p>
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis maiores autem minus distinctio facilis hic quae consequatur molestiae ipsa corporis, ab quo qui voluptatum dolores nemo natus doloremque obcaecati.


            </div>
            <button className="btn btn-primary">Get In Touch</button>
       </div>
        <div className="hero-section-img">
            <img src="profile.png" alt="Hero Section" />
        </div>
       </section>
      
    );
}