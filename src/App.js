function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <h3>Himanshu Rana</h3>
        <div className="sidebar-intro">
          <h1>Hello, I am Himanshu Rana</h1>
          <p>
            A FrontEnd Developer passionate about learning new and useful
            skills,building interactive web applications and try to makes better
            user experience.
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
              <a
                className="social-links twitter"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/himanshu__Rana"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </button>
            <button className="icon">
              <a
                className="social-links github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Himanshu916"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </button>
            <button className="icon">
              <a
                className="social-links linkedin"
                target="_blank"
                rel="noopener noreferrer"
                href="https://media.licdn.com/dms/image/D5603AQElAfnEIwn-4Q/profile-displayphoto-shrink_400_400/0/1703420779885?e=1709164800&v=beta&t=_QdtYTnlv8KK6R-CUdIfXsMd_yxzVdskaBFqrknIOoI"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </button>
            <button className="icon">
              <a
                className="social-links blog"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/himanshu__Rana"
              >
                <ion-icon name="cube-outline"></ion-icon>
              </a>
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
              Html,Css,Javascript,React,React Query,Styled Components,Tailwind
              CSS,Redux,Redux Toolkit,Node,Git. <br />
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
              I learnt web development at{" "}
              <a
                className="external"
                href="https://kyloapps.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neog Camp
              </a>{" "}
              , a Cohort Based Course run by{" "}
              <a
                className="external"
                href="https://kyloapps.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanay Pratap
              </a>{" "}
              .
            </p>

            <p>
              {/* I believe in showing a proof of my work, rather than listing my
              skills on a shiny piece of paper. Some of my works are shown
              below. */}
              “If your actions don’t live up to your words, you have nothing to
              say.” — DaShanne Stokes.I took this sentence seriously and that's
              why I believe in showing proof of my work, rather than listing my
              skills on Resume.So, Some of my works are shown below.
            </p>
          </div>
        </section>
        <section className="section section-project section-project-1">
          <h3>Project 1-Mom's Nivaala</h3>

          <div className="project-img">
            <div className="project-laptop">
              <a
                href="http://mom-nivaala.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project-pic"
                  src="images/momsnivaala.png"
                  alt="moms nivaala"
                />
              </a>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/Himanshu916/e_commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="http://mom-nivaala.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-react"></ion-icon>
            </a>
          </div>
          <div className="lists">
            <div className="list-box">
              <h3>What I learned through this project</h3>
              <ul className="list">
                <li>Handling authentication on client side.</li>
                <li>Data fetching and consume it to inside UI.</li>
                <li>Dynamic Routing</li>
                <li>Compound Component Pattern</li>
                <li>Integration of UI state with remote state.</li>
                <li>How to read and set local storage.</li>
                <li>How to organise code.</li>
              </ul>
            </div>
            <div className="list-box">
              <h3>What Tech Stack I used ?</h3>
              <ul className="list">
                <li> React , Redux Tookit</li>
                <li>Styled Components</li>
                <li>React Query</li>
                <li>React Toaster</li>
                <li>React Router Dom</li>
                <li>Supabase for APIs</li>
              </ul>
            </div>
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
                  alt="note keeping Pic"
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
          <div className="lists">
            <div className="list-box">
              <h3>What I learned through this project</h3>
              <ul className="list">
                <li>Handling Global State</li>
                <li>How to eliminate prop drilling.</li>
                <li>How to handle protected routes.</li>
              </ul>
            </div>
            <div className="list-box">
              <h3>What Tech Stack I used ?</h3>
              <ul className="list">
                <li> React</li>
                <li>React Router Dom</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section-project section-project-3">
          <h3>Project 3-Wild Oasis</h3>

          <div className="project-img">
            <div className="project-laptop">
              <a
                href="wild-oasis-himanshu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project-pic"
                  src="images/wild.png"
                  alt="Himanshu Profile Pic"
                />
              </a>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/Himanshu916/wild-oasis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://wild-oasis-himanshu.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-react"></ion-icon>
            </a>
          </div>
          <div className="lists">
            <div className="list-box">
              <h3>What I learned through this project</h3>
              <ul className="list">
                <li>Handling authentication on client side.</li>
                <li>Data fetching and consume it to inside UI.</li>
                <li>Dynamic Routing</li>
                <li>Compound Component Pattern</li>
                <li>Integration of UI state with remote state.</li>
                <li>How to read and set local storage.</li>
                <li>How to organise code.</li>
              </ul>
            </div>
            <div className="list-box">
              <h3>What Tech Stack I used ?</h3>
              <ul className="list">
                <li> React , Redux Tookit</li>
                <li>Styled Components</li>
                <li>React Query</li>
                <li>React Toaster</li>
                <li>React Router Dom</li>
                <li>Supabase for APIs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-project section-project-4">
          <h3>Project 4-QUiz Mania</h3>

          <div className="project-img">
            <div className="project-laptop">
              <a
                href="https://github.com/Himanshu916/quiz-mania"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project-pic"
                  src="images/quiz.png"
                  alt="Himanshu Profile Pic"
                />
              </a>
            </div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/Himanshu916/quiz-mania"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://the-quiz-mania.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-react"></ion-icon>
            </a>
          </div>
          <div className="lists">
            <div className="list-box">
              <h3>What I learned through this project ?</h3>
              <ul className="list">
                <li>How to update multiple states together.</li>
                <li>Worked with useReducer</li>
              </ul>
            </div>
            <div className="list-box">
              <h3>What Tech Stack I used ?</h3>
              <ul className="list">
                <li> React </li>
                <li>CSS</li>
                <li>Supabase for APIs</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section-projec section-project-5">
          <h3>Project 5-Component Library</h3>
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
          <div className="lists">
            <div className="list-box">
              <h3>What I learned through this project ?</h3>
              <ul className="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Sementic Elements</li>
                <li>A bit about accessibility</li>
                <li>Visual Hierarchy</li>
              </ul>
            </div>
            <div className="list-box">
              <h3>What Tech Stack I used ?</h3>
              <ul className="list">
                <li>Hyper Text Markup Language</li>
                <li>Pure CSS</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
