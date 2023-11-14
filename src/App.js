function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <h3>Himanshu Rana</h3>
        <div className="sidebar-intro">
          <h1>Hello, I am Himanshu Rana</h1>
          <p>
            A Web Developer passionate about publishing new and useful
            products,enhancing the internet experience for the users.
          </p>
          <a
            style={{ textDecoration: "none", marginTop: "2rem" }}
            className="btn"
            href="mailto:hranaritsh@gmail.com"
          >
            Contact Me
          </a>
          {/* <button className="btn">Contact Me</button> */}
        </div>
        <div className="sidebar-social">
          <p>Social Handles:</p>
          <div id="a" className="sidebar-social-icons">
            <button className="icon">
              <ion-icon name="logo-twitter"></ion-icon>
            </button>
            <button className="icon">
              <ion-icon name="logo-github"></ion-icon>
            </button>
            <button className="icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </button>
          </div>
        </div>
      </aside>
      <main className="main">
        <section className="section section-about">
          <h3>About-Himanshu Rana</h3>
          <div className="profile">
            <img
              className="profile-pic"
              src="https://media.licdn.com/dms/image/C5603AQFNAAmBlLwIJg/profile-displayphoto-shrink_400_400/0/1618350316921?e=1704931200&v=beta&t=f5-2hR-k0SWFnVW0lpJG9HsPKt-SvFEr_L_7P5HmgZg"
              alt="Himanshu Profile Pic"
            />
          </div>

          <div className="paragraphs">
            <p>
              I started my web development journey in November, 2020. Since then
              I have learnt new technologies and acquired Skills like
              Html,Css,Javascript,Node,Git. <br />
              Then I joined{" "}
              <a
                className="external"
                href="https://kyloapps.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kylo Apps
              </a>{" "}
              as a React developer and build an interactive{" "}
              <a
                className="external"
                href="https://cleandiet-plan.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                application
              </a>{" "}
              to suggest diets based on fat loss goal.
            </p>
            <p>
              I learnt web development at Neog Camp, A Cohort Based Course run
              by Tanay Pratap.I was a part of a team of 19 people where we
              discussed about project ideas , concepts and doubts.
            </p>

            <p>
              I believe in showing a proof of my work, rather than listing my
              skills on a shiny piece of paper. Some of my works are shown
              below.
            </p>
          </div>
        </section>
        <section className="section section-projec section-project-1">
          <h3>Project 1-Component Library</h3>
          <div className="project-img">
            <div className="project-laptop">
              <a
                href="http://wsquare.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  className="project-pic"
                  src="images/project1.png"
                  alt="Himanshu Profile Pic"
                />
              </a>
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Himanshu916/Component_Library"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="http://wsquare.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-react"></ion-icon>
            </a>
          </div>
        </section>
        <section className="section section-project section-project-2">
          <h3>Project 2-Note Keeping App</h3>

          <div className="project-img">
            <div className="project-laptop">
              <a
                href="http://keepnoteshimanshu.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project-pic"
                  src="images/project2.png"
                  alt="Himanshu Profile Pic"
                />
              </a>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/Himanshu916/keep-notes/tree/master/src"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="http://keepnoteshimanshu.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-react"></ion-icon>
            </a>
          </div>
        </section>
        <section className="section section-project section-project-3">
          <h3>Project 3 - Quiz App</h3>
          <p className="comingSoon">Coming Soon...</p>
        </section>
        <section className="section section-project section-project-4">
          <h3>Project 4 - E-Commerce App</h3>
          <p className="comingSoon">Coming Soon...</p>
        </section>
        <section className="section section-project section-project-5">
          <h3>Project 5 - Video Library</h3>

          <p className="comingSoon">Coming Soon...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
