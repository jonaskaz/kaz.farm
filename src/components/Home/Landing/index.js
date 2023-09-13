import { Wrapper, Image, Link } from "./Landing.styles";

const Landing = ({ image }) => {
  return (
    <Wrapper>
      <div>
        <Link href="/engineering">engineering</Link>
        <Link href="/writing">writing</Link>
        <Link href="/gown">gowns</Link>
      </div>
      <Image src={image}></Image>
    </Wrapper>
  );
};

export default Landing;
