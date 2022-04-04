import Header from "../Header";
import Blurb from "../Blurb";
import Skills from "../Skills";
import { AiOutlineLink } from "react-icons/ai";
import { Wrapper, FlexCont, Outlink } from "./Section.styles";

const Section = ({
  color,
  headerText,
  image,
  title,
  description,
  link,
  skills,
}) => {
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <FlexCont>
        {headerText && <Header text={headerText} />}
        <Blurb title={title} image={image} text={description} />
      </FlexCont>
      <Skills skills={skills} />
      <Outlink href={link}>
        <AiOutlineLink color="black" size={20} />
      </Outlink>
    </Wrapper>
  );
};

export default Section;
