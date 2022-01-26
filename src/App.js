import Section from "./components/Section";
import Intro from "./components/Intro";
import Menu from "./components/StickyMenu";

function App() {
  return (
    <div className="App">
      <Intro
        color="#c0d6df"
        name="Jonas Kazlauskas"
        title="Software Engineer, Student @ Olin College of Engineering"
        linkedin={"https://www.linkedin.com/in/jonas-kazlauskas-bb19a217b/"}
        github={"https://github.com/jonaskaz"}
      />
      <Section
        color="#fafafa"
        image={require("./images/hydro-api.png")}
        title="Python Flask RESTx data API"
        link="https://github.com/Olin-Hydro/hydro-api"
        description={
          <div>
            Designed and deployed a Python REST Data API on AWS to serve all our
            logs, sensor readings and smart contract data.
          </div>
        }
        skills={["Python", "flask", "AWS", "web3", "flask-restx", "SQLalchemy"]}
      />
      <Section
        color="#eaeaea"
        image={require("./images/hydro-web3.png")}
        title="Blockchain based community garden control"
        link="https://github.com/Olin-Hydro/mycelium"
        description={
          <div>
            Created and deployed a smart contract to lay the groundwork for
            community control of our garden using Brownie and Solidity
          </div>
        }
        skills={["Solidity", "Brownie", "Python", "Ganache"]}
      />
      <Section
        color="#fafafa"
        image={require("./images/cup-noodle-system.png")}
        title="Fullstack cup noodle vending machine"
        link="https://olincollege.github.io/pie-2021-03/Cup-Noodle/firmware.html"
        description={
          <div>
            A vending machine that takes cup noodle flavor orders through our
            website and makes them. My work includes the electrical system,
            order API, firmware, and integration. View our{" "}
            <a href="https://www.youtube.com/watch?v=6TkAAt8hxeA">
              promo video here.
            </a>
            <p>Features:</p>
            <ul>
              <li>React Frontend (Classmates' work)</li>
              <li>Python FastAPI order queue</li>
              <li>C++ order retriever on an ESP8266</li>
              <li>C++ Arduino controller</li>
              <li>X-Y gantry and cup noodle dispensors (Classmates' work)</li>
            </ul>
          </div>
        }
        skills={[
          "C++",
          "PlatformIO",
          "Python",
          "FastAPI",
          "ESPAsyncWebServer",
          "AccelStepper",
          "ArduinoJson",
        ]}
      />
      <Section
        color="#e8dab2"
        image={require("./images/evo-algo-1.png")}
        link="https://nova-crush-0ee.notion.site/Evolutionary-Algorithms-and-Q-learning-49e2efc0439849fbb78e55b9c7737987"
        title="Python reinforcement Q-learning and evolutionary algorithms"
        description="In this project, we created two numpy implementations of simple evolutionary algorithms. Next, we implemented Q-learning to solve two of OpenAI's GYM library environments."
        skills={["Python", "numpy", "matplotlib", "gym"]}
      />
      <Section
        color="#fafafa"
        image={require("./images/hydro-harvest-1.jpg")}
        title="Hydroponics automation controller"
        link="https://github.com/Olin-Hydro/circadia"
        description="Built an arduino program using C++ and PlatformIO to take sensor readings and schedule dispensing nutrients. Data is sent to a raspberry pi via serial which handles making calls to our Hydro API using Python."
        skills={["C++", "Arduino", "Serial", "Python"]}
      />
      <Section
        color="#ece4db"
        image={require("./images/react-logo.png")}
        title="This website"
        description="This website is written using React, html, CSS. Each project section is a component which allows for easy addition of new projects."
        skills={["React", "Javascript", "CSS", "HTML", "Heroku"]}
      />
    </div>
  );
}

export default App;
