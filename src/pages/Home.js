import { AiFillHome, AiOutlineScissor, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <nav style={{width: "50%"}} className="d-flex justify-content-between p-3 rounded">
        <Link to="/">
          <AiFillHome />
        </Link>
        <a href="#">
          <AiOutlineSearch />
        </a>
        <Link to="/services">
          <AiOutlineScissor />
        </Link>
      </nav>
      <h1>Hey, Ike</h1>
      <p>You look so great today, but we will make it even cooler!</p>
      <a href="#">What do you want to do?</a>
    </main>
  );
};

export default Home;
