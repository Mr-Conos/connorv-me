import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>connorv.me</h1>
      <Header />
      <Main />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

function Header(){
  return <nav>	
    <ul class="nav-bar"><div class="bg"></div>
    <li><a class="nav-link active" href="#home">Home</a></li>
    <li><a class="nav-link" href="#projects">Projects</a></li>
    <li><a class="nav-link" href="#skills">Skills</a></li>
    <li><a class="nav-link" href="#contact">Contact</a></li>
    </ul>
  </nav>
}

function Main () {

    return <div id="home">
      <div class="filter"></div>
      <section class="intro">
        <h3>Connor 🚋🧑‍🦽🚓<hr></hr></h3>
        <p>Hey, I am Connor (<i>AKA Conos</i>), and i'm developer.</p>
        <p>I like making Discord Bots and APIs among many other things!</p>
      </section>
    </div>
}

function Projects () {
  return <div id="projects"> 

    <h3>Projects<hr></hr></h3>
    <p>These are projects I have worked on throughout my programing journey.</p>
      <div class="work-box">
    <div class="work">

      <div class="card">
        <img class="work-img" src="./images/bullymmee.png"></img>
        <a href="https://bullyme.xyz" target="_blank">
        <div class="work-content">BullyMe - a fun Discord Chatbot!</div></a>
        </div>
        <div class="card">
        <img class="work-img" src="./images/rock-api-rock.png"></img>
        <a href="https://github.com/Mr-Conos/Rock-API" target="_blank">
        <div class="work-content">Rock API - this is an API that gives images of rocks.</div></a>
        </div>
        <div class="card">
        <img class="work-img" src="./images/detective_real.png"></img>
        <a href="" target="_blank">
        <div class="work-content">The Detective - a bot I discontinued</div></a>
        </div>

        </div>
      </div>
  </div>
}

function Skills (){
  return <div id="skills"> 
  <h3>Skills<hr></hr></h3>
  <p>Here are the languages, libraries and frameworks I am experienced in.</p>
  <div class="work-box">
  <div class="work">

  <div class="skills-card"><div class="work-header">Python</div></div>
  <div class="skills-card"><div class="work-header">C#</div></div>
  <div class="skills-card"><div class="work-header">SQL</div></div>  
  <div class="skills-card"><div class="work-header">Flask</div></div>  
  <div class="skills-card"><div class="work-header">Discord.py</div></div>

  </div>
  </div>
  </div>
}

function Contact() {
  <div id="contact"> 
  <h3>Contact<hr></hr></h3>
  <p>DM me on Discord at Conos#9079</p>

  </div>
}

function Footer() {
  return <footer>
      <div class="copyright">
          <p>Made by Conos#9079</p>
      </div>
  </footer>
}


export default App;