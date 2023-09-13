import { Wrapper, Content, Image, ResponsiveP } from "./GownBlock.styles";

const GownBlock = ({ text, image, imageLeft }) => {
  return (
    <Wrapper>
      {imageLeft ? (
        <>
          {image && <Image alt="gown image" src={image}></Image>}
          <Content>
            <ResponsiveP>{text}</ResponsiveP>
          </Content>
        </>
      ) : (
        <>
          <Content>
            <ResponsiveP>{text}</ResponsiveP>
          </Content>
          {image && <Image alt="gown image" src={image}></Image>}
        </>
      )}
    </Wrapper>
  );
};

export default GownBlock;
