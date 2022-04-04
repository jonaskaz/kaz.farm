import SocialLinks from "../SocialLinks";
import Header from "../Header";
import { Wrapper, Title } from "./Intro.styles";


const Intro = ({ color, name, title, linkedin, github}) => {
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <Header text={name} />
      <Title>
        <h3>{title}</h3>
        <div>jkazlauskas(at)olin.edu</div>
      </Title>
      <SocialLinks linkedin={linkedin} github={github} />
    </Wrapper>
    
  );
};

export default Intro;