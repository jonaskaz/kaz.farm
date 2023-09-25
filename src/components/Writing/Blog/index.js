import { Wrapper, Text, Title } from "./Blog.styles";

const Blog = ({ title, text }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Blog;
