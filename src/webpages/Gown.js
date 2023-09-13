import GownBlock from "../components/Gowns/GownBlock";

function Gown() {
  return (
    <div className="GownApp">
      <GownBlock
        text="gown \n\"
        imageLeft={true}
        image={require("../images/gowns/IMG_6639.JPEG")}
      ></GownBlock>
      <GownBlock
        text="flow and glow"
        imageLeft={false}
        image={require("../images/gowns/IMG_6854.JPEG")}
      ></GownBlock>
    </div>
  );
}

export default Gown;
