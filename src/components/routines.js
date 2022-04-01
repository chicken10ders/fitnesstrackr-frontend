import { Link } from "react-router-dom";

const Routines = ({ routines, user, activities }) => {
  return (
    <>
      <h1 className="flex justify-center">Routines</h1>

      {user ? (
        <Link to="./addroutine">
          <button>Add routine</button>
        </Link>
      ) : null}

      <div className="grid grid-cols-3 gap-4 place-content-around">
        {routines.map((routine) => {
          return (
            <div
              className=" border border-slate-700 bg-blue-300"
              key={routine.id}
            >
              <h2 className="font-bold underline text-red-400">
                {routine.name}
              </h2>

              <p>{routine.goal}</p>
              {routine.activities.map((activity) => {
                return (
                  <div className="flex justify-center pt-10" key={activity.id}>
                    <li>{activity.name}</li>
                    <li>{activity.description}</li>
                  </div>
                );
              })}
              <p className="flex justify-end italic ">{routine.creatorName}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Routines;
