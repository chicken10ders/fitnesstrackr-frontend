const Routines = ({ routines, user }) => {
  return (
    <>
      <h1>Routines</h1>
      {/* user ? (
          <Link to="./addroutine">
            <button>Add routine</button>
          </Link>
        ) : null */}

      {routines.map((routine) => (
        <div key={routine._id}>
          <h2>{routine.title}</h2>
          <p>{routine.goal}</p>
          <h3>{routine.user}</h3>
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default Routines;
