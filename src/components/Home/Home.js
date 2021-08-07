import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ui text container">
      <h1 className="ui header">World's leading platform for cyber security threat simulations</h1>
      <h2>Start creating amazing simulations with custom modules</h2>
      <Link to="/pricing" className="ui huge primary button">
         Start Now <i className="right arrow icon"></i>
      </Link>
    </div>
  );
};

export default Home;
