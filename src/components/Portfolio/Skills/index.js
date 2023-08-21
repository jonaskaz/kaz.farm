import PropTypes from "prop-types";
import { Wrapper, Item } from "./Skills.styles";

const Skills = ({ skills }) => {
  var output = skills.map((skill) => (
    <Item key={skill}>
      {skill}
    </Item>
  ));
  return <Wrapper>{output}</Wrapper>;
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
