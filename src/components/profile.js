import { Link } from "react-router-dom";
import { API } from "../index";
const Profile = ({ user }) => {
  const lsToken = localStorage.getItem("token");

  const myRoutines = async () => {
    const resp = await fetch(`${API}/users/${user.username}/routines`, {
      header: {
        "Content-Type": "application/json",
      },
    });
    const info = await resp.json();
    console.log(info);
  };

  myRoutines();
  return (
    <>
      {lsToken ? (
        <Link to="./addroutine">
          <button>Add routine</button>
        </Link>
      ) : (
        <div>
          <h1> Please Log in to add routines! </h1>
        </div>
      )}
    </>
  );
};

export default Profile;
