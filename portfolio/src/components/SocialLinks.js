import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const SocialLinks = ({ linkedin, github }) => {
  return (
    <div className="social-links flex-container">
      <a href={github}>{<AiFillGithub color="black" size={20} />}</a>
      <a href={linkedin}>{<AiFillLinkedin color="black" size={20} />}</a>
    </div>
  );
};

export default SocialLinks;
