import Blog from "../components/Writing/Blog";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const PageNavigationButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  margin: 10px;
`;

const Wrapper = styled.div`
  text-align: right;
  margin: 0px 50px 50px 50px;
`;

function Writing() {
  const [textContent, setTextContent] = useState("");
  const { num } = useParams();
  const MAXBLOGS = 6;
  let blogNum = num;
  if (blogNum === undefined) {
    blogNum = 1;
  }
  useEffect(() => {
    fetch("/text/writing/blog" + blogNum + ".txt")
      .then((response) => response.text())
      .then((data) => setTextContent(data))
      .catch((error) => console.error("Error fetching text file:", error));
  }, [blogNum]);
  const titles = [
    "My Theory of Social Change",
    "Love and attachment, 10 people in Ecuador",
    "Reversing Discourse: A Reflection on Gender in Malawi",
    "Undeliverance",
    "Placing Myself",
    "Surprise christmas with your ex",
  ];
  const dates = [
    "September 13, 2023",
    "September 25, 2023",
    "November 7, 2023",
    "November 14, 2023",
    "December 29, 2023",
    "April 1, 2024",
  ];
  let nextPage = "/writing/" + (Number(blogNum) + 1);
  let prevPage = "/writing/" + (Number(blogNum) - 1);
  return (
    <div className="WritingApp">
      <Blog
        text={textContent}
        title={titles[blogNum - 1]}
        date={dates[blogNum - 1]}
      />
      <Wrapper>
        {blogNum > 1 && (
          <PageNavigationButton to={prevPage}>Previous</PageNavigationButton>
        )}
        {blogNum < MAXBLOGS && (
          <PageNavigationButton to={nextPage}>Next</PageNavigationButton>
        )}
      </Wrapper>
    </div>
  );
}

export default Writing;
