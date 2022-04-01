import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <div className="font-bold text-red-700">
      <Link to="/">Home</Link>
      <Link to="/routines">Routines</Link>
      <Link to="/profile">My Profile</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/register"> Register</Link>
      <Link to="/login">Login</Link>
      <Link
        to="/"
        onClick={() => {
          setToken("");
          setUser([]);
          localStorage.removeItem("token");
        }}
      >
        Log Out
      </Link>
      {user && <span>Welcome: {user}</span>}
    </div>
  );
};

export default Navbar;
