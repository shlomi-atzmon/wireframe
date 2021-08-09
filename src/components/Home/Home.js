import { Link } from "react-router-dom";
import HomeWrapper from '../UI/HomeWrapper';

const Home = () => {
  return (
    <HomeWrapper>
      <h1>World's leading platform for cyber security threat simulations</h1>
      <h2>Start creating amazing simulations with custom modules</h2>
      <Link to="/pricing">
         Start Now <i className="right arrow icon"></i>
      </Link>
    </HomeWrapper>
  );
};

export default Home;
