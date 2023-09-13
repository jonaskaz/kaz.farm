import Landing from "../components/Home/Landing";

function Home() {
  return (
    <div className="Home">
      <Landing image={require("../images/home/pizza.jpg")}></Landing>
    </div>
  );
}

export default Home;
