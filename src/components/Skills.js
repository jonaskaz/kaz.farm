import PropTypes from "prop-types";

const Skills = ({ skills }) => {
  var output = skills.map(skill => <span key={skill} className="skill">{skill}</span>)
  return <div className="skills">{output}</div>
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
