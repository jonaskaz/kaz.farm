import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  @media (min-width: 768px) {
    /* Adjust font size for screens with a width of 768px or larger (computer) */
    padding: 25px 50px;
  }
`;

export const Content = styled.div`
  max-width: 50%;
  flex: 1;
  text-align: center;
  padding: 10px 30px;
  @media (min-width: 768px) {
    /* Adjust font size for screens with a width of 768px or larger (computer) */
    padding: 25px 50px;
  }
`;

export const ResponsiveP = styled.p`
  font-size: 20px; /* Default font size for smaller screens (mobile) */

  @media (min-width: 768px) {
    /* Adjust font size for screens with a width of 768px or larger (computer) */
    font-size: 40px;
  }
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
