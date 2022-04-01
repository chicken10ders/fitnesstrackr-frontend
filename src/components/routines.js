const Routines = ({ routines, user, activites }) => {
  console.log(routines);
  return (
    <div>
      <h1 className="flex justify-center">Routines</h1>
      {/* user ? (
          <Link to="./addroutine">
            <button>Add routine</button>
          </Link>
        ) : null */}

      {routines.map((routine) => {
        return (
          <div className="flex justify-left" key={routine.id}>
            <h2>{routine.name}</h2>
            <h3>{routine.goal}</h3>
            <h2>{routine.creatorName}</h2>
            {routine.activities.map((activity) => {
              return (
                <div className="flex justify-center" key={activity.id}>
                  <li>{activity.name}</li>
                  <li>{activity.description}</li>
                </div>
              );
            })}
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
