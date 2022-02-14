import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        width: "100%",
        height: 48,
        backgroundColor: "slategrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 24,
      }}
    >
      <Link to="/">Homepage</Link>
    </div>
  );
};

export default Navbar;
