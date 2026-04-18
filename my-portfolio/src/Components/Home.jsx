function Home() {
  return (
    <section className="home">
      <div className="home-img">
        <img src="/ajai.jpeg" alt="Profile" />
      </div>

      <div className="home-content">
        <h1>Hi, It's <span>AJAI</span></h1>
        <h3 className="typing-text">I'm a <span></span></h3>

        <p>
          I'm a passionate web developer with experience in creating dynamic and responsive websites.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ajai-s-8a5072403" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/clash_aj_" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:ajai16745@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/ajai-clouds" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <a href="#" className="btn">Hire me</a>
      </div>
    </section>
  );
}

export default Home;