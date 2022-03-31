const Routines = ({ routines, user }) => {
  return (
    <>
      <h1>Routines</h1>
      {/* user ? (
          <Link to="./addroutine">
            <button>Add routine</button>
          </Link>
        ) : null */}

      {routines.map((routine) => {
        return (
          <div key={routine.id}>
            <h2>{routine.name}</h2>
            <h3>{routine.goal}</h3>
            <h2>{routine.creatorName}</h2>
            {activites.map((activity) => {
              return (
                <div key={activity.id}>
                  <p>{activity.name}</p>
                  <p>{activity.description}</p>
                </div>
              );
            })}

            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default Routines;
