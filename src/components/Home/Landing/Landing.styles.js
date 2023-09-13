import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 75%;
  margin: 10px 10px;
`;

export const Link = styled.a`
  font-size: 25px;
  color: #5f0f40; /* Link color */
  text-decoration: none; /* Remove underlines */
  transition: color 0.2s ease-in-out; /* Smooth color transition on hover */

  &:hover {
    color: #9a031e; /* Color on hover */
  }
  margin: 10px;
`;
