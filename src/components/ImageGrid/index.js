import { Wrapper, Content } from "./ImageGrid.styles";

const ImageGrid = ({header, content}) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default ImageGrid;
