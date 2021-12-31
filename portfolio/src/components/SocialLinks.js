import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const SocialLinks = ({ linkedin, github }) => {
  return (
    <div className="social-links flex-container">
      <a href={github} className="social-link">
        <AiFillGithub color="black" size={20} />
      </a>
      <a href={linkedin} className="social-link">
        <AiFillLinkedin color="black" size={20} />
      </a>
      <AiOutlineMail color="black" size={20} style={{ paddingRight: "3px" }} />
      <div>jkazlauskas(at)olin.edu</div>
    </div>
  );
};

export default SocialLinks;
