import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser }) => {
  console.log(user);
  return (
    <div className="font-bold text-red-700 bg-red-200">
      <Link className="pr-2" to="/">
        Home
      </Link>
      <Link className="pr-2" to="/routines">
        Routines
      </Link>
      <Link className="pr-2" to="/profile">
        My Routines
      </Link>
      <Link className="pr-2" to="/activities">
        Activities
      </Link>
      <Link className="pr-2" to="/register">
        {" "}
        Register
      </Link>
      <Link className="pr-2" to="/login">
        Login
      </Link>
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
