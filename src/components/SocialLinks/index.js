import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link, Wrapper } from "./SocialLinks.styles";

const SocialLinks = ({ linkedin, github }) => {
  return (
    <Wrapper>
      <Link href={github}>{<AiFillGithub color="black" size={24} />}</Link>
      <Link href={linkedin}>{<AiFillLinkedin color="black" size={24} />}</Link>
    </Wrapper>
  );
};

export default SocialLinks;
