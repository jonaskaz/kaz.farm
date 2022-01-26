import PropTypes from "prop-types";

const Skills = ({ skills }) => {
  var output = skills.map((skill) => (
    <div key={skill} className="skill">
      {skill}
    </div>
  ));
  return <div className="flex-container skills">{output}</div>;
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
