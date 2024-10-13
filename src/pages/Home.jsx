import ppsize from './ppsize.jpg';
import abut from './abut.jpg';
import project1 from './project1.png';
import project2 from './project2.png';
import linkedin from './linkedIn.svg';
import github from './Github.svg';
import './style.css';
export default function Home() {
  return (
    <div className="start" id="home">
      <div className='main'>
        <div className='text1'>
          <h1>Full-Stack Web Developer</h1>
          <p>Hi,I'm Bijay.A passionate Full-Stack MERN Developer Based in Banglore,India.</p>

          <section className='headlogo'>
            <a href="https://www.linkedin.com/in/bijay-adhikari-656122327/"><img src={linkedin} alt="linkedIn" /></a>
            <a href="https://github.com/codeypas?tab=repositories" > <img src={github} alt="github" /></a>
          </section>

        </div>
        <div className='img1'>
          <img src={ppsize} alt="" />
        </div>

      </div>

      <div className='logos'>
        <h2>Tech Stack</h2>
        <ul>
          <li><img src="https://skillicons.dev/icons?i=html,css" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=js,ts" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=react,next" alt="" /></li>
        </ul>
      </div>

      {/* home  */}


      {/* about  */}

      <div id='about' className='abut'>
        <section className='se1'>
          <img src={abut} alt="" />
        </section>
        <section className='se2'>
          <h2>ABOUT ME</h2>
          <h4>BMSCE 2026 </h4>
          <p id='p-text'>Hey, my name is Bijay, and I'm a Dynamic and Innovative Computer Science Engineering Student <br />With Keen Interest in Web Development, Software Devlopment,
            Cybersecurity and Blockchain Technology.
            <br />Adept at Leadership,Problem-Solving, and Team Collaboration.</p>

          <div id='btn'>
            <a href="https://www.linkedin.com/in/bijay-adhikari-656122327/"><button>Visit Linkedin</button></a>
          </div>
        </section>

      </div>


      {/* about  */}


      {/* project */}

      <div id='project' className='abut'>
        <section className='se2'>
          <h2>Projects</h2>
          <h4>V-ICB </h4>
          <p id='p-text'>● Dynamic Branch website project showcasing diverse visual content, Incorporated responsive design principles for optimal <br />
            ● user experience across devices. Implemented interactive features to engage visitors <br />
            ● Tech stacks: React,Redux,Firebase,MERN stack.</p>

          <div id='btn'>
            <a href="https://github.com/codeypas/V-ICB-secondYear-FullStack-Project-"><button>Visit</button></a>
          </div>
        </section>
        <section className='se1'>
          <a href="https://github.com/codeypas/V-ICB-secondYear-FullStack-Project-"><img src={project1} alt="" /></a>
        </section>

      </div>


      <div id='project' className='abut'>
      <section className='se1'>
          <a href="https://github.com/codeypas/e-commerce-html-css"><img src={project2} alt="" /></a>
        </section>
        <section className='se2'>
          <h4>RockRoads </h4>
          <p id='p-text'>● A Full pledged e-commerce system for clothing
          things,including selecting items,<br /> adding to cart, payment through stripe API during checkout <br /> ● Tech stacks: ReactJS,NodeJS,MongoDB, Redux,Firebase</p>

          <div id='btn'>
            <a href="https://github.com/codeypas/e-commerce-html-css"><button>Visit</button></a>
          </div>
        </section>

      </div>



      {/* project */}


      {/* contact  */}
      <div className='con'>
        <div id='contact' className='con1'>
          <p id='p1'>Contact</p>
          <h3>Here You Can Find Me...👇</h3>
          <div className='con2'>
            <span className='location'>
              <h4>Location</h4>
              <p id='p-text'>Banglore,Karnataka</p>
            </span>
            <span className='mail'>
              <h4>Mail</h4>
              <p id='p-text'>bjbestintheworld@gmail.com</p>
            </span>
          </div>
        </div>

      </div>
      {/* contact  */}
    </div >




  )
}
