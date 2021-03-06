import { Wrapper, Content, Image } from "./Blurb.styles";

const Blurb = ({ title, text, image }) => {
  return (
    <Wrapper>
        <Content>
          <h3>{title}</h3>
          <div>{text}</div>
        </Content>
        {image && <Image alt="project image" src={image}></Image>}
    </Wrapper>
  );
};

export default Blurb;
