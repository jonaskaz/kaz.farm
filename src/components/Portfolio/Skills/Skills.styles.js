import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 20px;
  max-width: 50%;
  margin-bottom:4px
`;

export const Item = styled.div`
  float: left;
  border-radius: 5px;
  border-width: 1px;
  border-style: groove;
  border-color: #000000;
  padding-left: 4px;
  padding-right: 4px;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  background-color: #e0e0e0;
  margin-right: 5px;
  font-size: 15px;
  margin-bottom: 9px;
`;
