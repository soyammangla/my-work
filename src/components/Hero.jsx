const Hero = () => {
  return (
    <div className="main-hero">
      <section className="container py-3 hero">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome to EasyShop :- Where shopping meets simplicity.
            </h1>
            <p className="lead">
              EasyShop is your trusted online store where quality meets
              affordability. Discover trending products, enjoy smooth shopping,
              and experience happiness with every order, because shopping should
              always be simple and easy.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="col-lg-6 text-center hero-image">
            <img
              src="hero.jpeg"
              alt="Hero"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
