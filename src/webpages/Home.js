import Section from "../components/Section";
import Intro from "../components/Intro";
import StickyMenu from "../components/Menu";

function Home() {
  return (
    <div className="App">
      <Intro
        color="#efc3e6"
        name="Jonas Kazlauskas"
        title="Mission Driven Software Engineer"
        school="Computing @ Olin College of Engineering"
        email="jonas@kaz.farm"
        linkedin={"https://www.linkedin.com/in/jonas-kazlauskas-bb19a217b/"}
        github={"https://github.com/jonaskaz"}
      />
      <StickyMenu
        items={[
          { text: "Home", href: "/" },
          { text: "Resume", href: require("../images/JonasResume.pdf") },
        ]}
      />
      <Section
        color="#fafafa"
        image={require("../images/lighting-box.png")}
        title="Controlled Lighting for the Keweenaw Bay Tribal Fish Hatchery"
        link="https://github.com/jonaskaz/project-brood-stock"
        description={
          <div>
            NSF funded self-directed summer research project at Michigan
            Technological Institute in collaboration with the Keweenaw Bay
            Indian Community (KBIC). Designed, built, and installed an automated
            lighting system that allowed for both user control and automation to
            mimic sunrise and sunset through lighting inside the KBIC fish
            hatchery.
          </div>
        }
        skills={[
          "User-Oriented Design",
          "C++",
          "Project Management",
          "Electrical Engineering",
        ]}
      />
      <Section
        color="#e8dab2"
        image={require("../images/mural.png")}
        title="We are Waltham: Welcome Home (CDCW Mural Project)"
        link="https://devpost.com/software/we-are-waltham-welcome-home-cdcw-mural-project"
        description={
          <div>
            Winner of the 2023 DeisHack Hackathon for social good: Best
            Non-technical Solution. We created a novel solution for the
            Community Day Center of Waltham (CDCW), a center that provides
            assistance and housing to the unhoused population of Waltham. Our
            solution is a mural program that would employ and humanize the
            clients of the CDCW while simultaneously challenging the dominant
            negative perceptions of unhoused people.
          </div>
        }
        skills={[
          "User-Oriented Design",
          "UI/UX",
          "Figma",
          "Project Management",
          "Video Editing",
        ]}
      />
      <Section
        color="#eaeaea"
        image={require("../images/hydro-system-v2.jpg")}
        title="Hydroponics Automation Architecture Re-Design"
        link="https://github.com/jonaskaz/lsd-portfolio/blob/main/quality.md"
        description={
          <div>
            Fully re-designed the automation architecture for Olin's Hydroponics
            club. The new system was designed for scale, maintainability,
            transparency and robustness.
          </div>
        }
        skills={["Databases", "Deployment", "Design", "Systems Thinking"]}
      />
      <Section
        color="#ece4db"
        image={require("../images/golang.png")}
        title="Automation Scheduler and Controller (Mother Nature)"
        link="https://github.com/Olin-Hydro/mother-nature"
        description={
          <div>
            Created a high level controller in Go for Hydro's newest automation
            system. Mother Nature is complete with mocks for testing and
            continuous integration via github workflows. This project is still
            under development.
          </div>
        }
        skills={[
          "Golang",
          "Continuous Integration",
          "Github Workflows",
          "Unit Testing",
        ]}
      />
      <Section
        color="#fafafa"
        image={require("../images/storage-api-deployment.jpg")}
        title="Image Storage API Deployed With Docker and Ansible"
        link="https://github.com/jonaskaz/plant-analysis/tree/main/storage_api"
        description={
          <div>
            Created a basic FastAPI app that stores images locally and makes
            them available via GET request by timestamp. This API was Dockerized
            and can be deployed on any remote server by running an ansible
            playbook. The API was used to take pictures of seedlings as they
            grow for computer vision experiments.
          </div>
        }
        skills={["Python", "Docker", "FastAPI", "Ansible"]}
      />
      <Section
        color="#e8dab2"
        image={require("../images/plant-vision.png")}
        title="Plant Image Detection and Measurement"
        link="https://github.com/jonaskaz/plant-vision"
        description={
          <div>
            Plant detection and measurement in images using Python, OpenCV, and
            PlantCV. We used filtering and binary thresholding to identify the
            plants, scaled their size to a known size on the image, and tracked
            their growth over time.
          </div>
        }
        skills={["Python", "OpenCV", "PlantCV", "Matplotlib"]}
      />
      <Section
        color="#eaeaea"
        image={require("../images/taproot.png")}
        title="Javascript GraphQL Hydroponics Data API"
        link="https://github.com/Olin-Hydro/taproot"
        description={
          <div>
            Designed and deployed a NodeJS GraphQL Data API on AWS with
            docker-compose to serve and store all our tasks logs, sensor
            readings, and system parameters.
          </div>
        }
        skills={["Javascript", "Node", "AWS", "GraphQL", "MySQL", "Docker"]}
      />
      <Section
        color="#fafafa"
        image={require("../images/hydro-harvest-1.jpg")}
        title="Hydroponics automation controller"
        link="https://github.com/Olin-Hydro/circadia"
        description="Built an arduino program using C++ and PlatformIO to take sensor
         readings and schedule dispensing nutrients. Data is sent to a raspberry pi 
         via serial which handles making calls to our API. Pictured on the right is
         a head of lettuce harvested from our garden."
        skills={["C++", "Arduino", "Serial", "PlatformIO", "OOP"]}
      />
      <Section
        color="#e8dab2"
        image={require("../images/hydro-system.jpg")}
        title="Raspberry Pi Python API Request Translator"
        link="https://github.com/Olin-Hydro/xylem"
        description="Created a translator to read serial data from Circadia and 
          make GraphQL API requests to store sensor data and retrieve system parameters.
          Shown in the right is the full automation system diagram."
        skills={["Python", "PySerial", "GraphQL", "Requests"]}
      />
      <Section
        color="#fafafa"
        image={require("../images/hydro-api.png")}
        title="Python Flask RESTx data API"
        link="https://github.com/Olin-Hydro/hydro-api"
        description={
          <div>
            Designed and deployed a Python REST Data API on AWS to serve all our
            logs, sensor readings and smart contract data. This was our version
            1 API that was eventually replaced with our current GraphQL
            implementation.
          </div>
        }
        skills={["Python", "flask", "AWS", "web3", "flask-restx", "SQLalchemy"]}
      />
      <Section
        color="#eaeaea"
        image={require("../images/hydro-web3.png")}
        title="Blockchain based community garden control"
        link="https://github.com/Olin-Hydro/mycelium"
        description={
          <div>
            Created and deployed a smart contract to lay the groundwork for
            community control of our garden using Brownie and Solidity.
          </div>
        }
        skills={["Solidity", "Brownie", "Python", "Ganache"]}
      />
      <Section
        color="#fafafa"
        image={require("../images/cup-noodle-system.png")}
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
        image={require("../images/evo-algo-1.png")}
        link="https://nova-crush-0ee.notion.site/Evolutionary-Algorithms-and-Q-learning-49e2efc0439849fbb78e55b9c7737987"
        title="Python reinforcement Q-learning and evolutionary algorithms"
        description="In this project, we created two numpy implementations of simple evolutionary algorithms. Next, we implemented Q-learning to solve two of OpenAI's GYM library environments."
        skills={["Python", "numpy", "matplotlib", "gym"]}
      />
      <Section
        color="#ece4db"
        image={require("../images/react-logo.png")}
        link="https://github.com/jonaskaz/portfolio"
        title="This website"
        description="This website is written using React, html, CSS. Each project section is a component which allows for easy addition of new projects."
        skills={["React", "Javascript", "CSS", "HTML", "Heroku"]}
      />
    </div>
  );
}

export default Home;
