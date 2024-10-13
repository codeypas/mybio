import "./footer.css";
import github from './Github.svg';
import linkedin from './Linkedin.svg';

export default function Footer() {
  return (
    <div className='foottop'>
      <section className='sec1'>
      <h2>Copyright &#169; 2024.All rights are reserved</h2>
      </section>
      <section className='sec2'>
        <a href="https://www.linkedin.com/in/bijay-adhikari-656122327/"><img src={linkedin} alt="linkedIn" /></a>
        <a href="https://github.com/codeypas?tab=repositories" > <img src={github} alt="github" /></a>
      </section>

    </div>
  )
}
