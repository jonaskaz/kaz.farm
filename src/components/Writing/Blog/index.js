import { Wrapper, Text, Title, Date, HeaderWrapper } from "./Blog.styles";

const Blog = ({ title, text, date }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </HeaderWrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Blog;
