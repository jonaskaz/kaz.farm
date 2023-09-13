import GownBlock from "../components/Gowns/GownBlock";

function Gown() {
  return (
    <div className="GownApp">
      <GownBlock
        text="gown \n\"
        textSize="50px"
        imageLeft={true}
        image={require("../images/gowns/IMG_6639.JPEG")}
      ></GownBlock>
      <GownBlock
        text="flow and glow"
        textSize="30px"
        imageLeft={false}
        image={require("../images/gowns/IMG_6854.JPEG")}
      ></GownBlock>
    </div>
  );
}

export default Gown;
