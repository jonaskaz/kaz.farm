import { Wrapper, Content, Image } from "./GownBlock.styles";

const GownBlock = ({ text, image, imageLeft, textSize }) => {
  return (
    <Wrapper>
      {imageLeft ? (
        <>
          {image && <Image alt="gown image" src={image}></Image>}
          <Content>
            <p style={{ fontSize: textSize }}>{text}</p>
          </Content>
        </>
      ) : (
        <>
          <Content>
            <p style={{ fontSize: textSize }}>{text}</p>
          </Content>
          {image && <Image alt="gown image" src={image}></Image>}
        </>
      )}
    </Wrapper>
  );
};

export default GownBlock;
