import { Image } from "./Thumb.styles";

const Thumb = ({image, title, description}) => {
  return (
    <div>
      <Image src={image}></Image>
      <h5>{title}</h5>
    </div>
  );
};

export default Thumb;
