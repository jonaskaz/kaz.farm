import Blog from "../components/Writing/Blog";
import React, { useEffect, useState } from "react";

function Writing() {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    fetch("text/writing/blog1.txt")
      .then((response) => response.text())
      .then((data) => setTextContent(data))
      .catch((error) => console.error("Error fetching text file:", error));
  }, []);

  return (
    <div className="WritingApp">
      <Blog text={textContent} title={"Downloading my thoughts"} />
    </div>
  );
}

export default Writing;
