import Header from "./Header";
import Blurb from "./Blurb";
import Skills from "./Skills";
import { AiOutlineLink } from "react-icons/ai";

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
    <div style={{ backgroundColor: color }} className="section">
      <div className="flex-container">
        {headerText && <Header text={headerText} />}
        <Blurb title={title} image={image} text={description} />
      </div>

      <Skills skills={skills} />
      <a href={link}>
        <AiOutlineLink style={{ padding: "20px" }} color="black" size={20} />
      </a>
    </div>
  );
};

export default Section;