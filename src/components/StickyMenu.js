import { useState, useEffect, useRef } from "react";

const StickyMenu = ({ items }) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setIsSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  var output = items.map((item) => (
    <h3 key={item.text} className="menu-item" >
      <a href={item.href}>{item.text}</a>
    </h3>
  ));
  return (
    <div
      className={`menu sticky-wrapper${isSticky ? " sticky" : ""}`}
      ref={ref}
    >
      <div className="sticky-inner">{output}</div>
    </div>
  );
};

export default StickyMenu;
