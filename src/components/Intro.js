import SocialLinks from "./SocialLinks";
import Header from "./Header";
import Skills from "./Skills";


const Intro = ({ color, name, title, linkedin, github}) => {
  return (
    <div className="section-intro" style={{ backgroundColor: color }}>
      <Header text={name} />
      <div className="intro-title">
        <h3>{title}</h3>
        <div>jkazlauskas(at)olin.edu</div>
      </div>
      <SocialLinks linkedin={linkedin} github={github} />
    </div>
    
  );
};

export default Intro;
