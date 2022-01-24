import Button from "./Button";
import PropTypes from "prop-types";

const Skills = ({ skills }) => {
  skills.forEach((element) => {
    console.log(element);
    return <Button>{element}</Button>;
  });
  return <div></div>;
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
