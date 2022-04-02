import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  const lsToken = localStorage.getItem("token");
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
