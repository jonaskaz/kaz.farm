import { Wrapper, Text, Title } from "./Blog.styles";

const Blog = ({ title, text }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <p>Please write me with your thoughts and ideas: jonas@kaz.farm</p>
    </Wrapper>
  );
};

export default Blog;
