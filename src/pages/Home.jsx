function Home(){
    return(
        <div className="container my-5">

            {/* Hero Section */}
            <section className="row">
                <div className="col-md-7 my-auto" data-aos="fade-right" >
                    <h1 className="fw-bold">Welcome to my Agency</h1>
                    <p>We provide the best services for you and your business.</p>
                </div>
                <div className="col-md-5" data-aos="fade-left">
                    <img src="https://www.cj.com/hubfs/Agency_HeroImage.png" className="img-fluid" />
                </div>
            </section>
            {/* Services Section */}
            <section className="row bg-light p-4 mt-4">
                <div className="col-md-12">
                    <h4 className="fw-bold text-center" data-aos="fade-up">Our Services</h4>
                    <div className="row mt-5">
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    React Development
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Programming Tutorials
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Guidance Counseling
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section className="row p-4 mt-4">
                <h5 className="fw-bold" data-aos="fade-up">Testimonials</h5>
                <div id="carouselExampleCaptions" className="carousel slide" data-aos="fade-up">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://www.cj.com/hubfs/Agency_HeroImage.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.cj.com/hubfs/Agency_HeroImage.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.cj.com/hubfs/Agency_HeroImage.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Home;