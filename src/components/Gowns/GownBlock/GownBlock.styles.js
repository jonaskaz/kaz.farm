import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 60px;
`;

export const Content = styled.div`
  max-width: 50%;
  flex: 1;
  padding: 30px 60px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 60%;
  max-height: 700px;
  border-radius: 2px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
