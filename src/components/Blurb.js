const Blurb = ({ title, text, image }) => {
  return (
    <div className="blurb">
      <div className="blurb-with-image">
        <div className="blurb-details">
          <h3>{title}</h3>
          <div className="blurb-text">{text}</div>
        </div>
        {image && <img alt="project" src={image} className="blurb-image"></img>}
      </div>
    </div>
  );
};

export default Blurb;
