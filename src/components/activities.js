const Activities = ({ activities }) => {
  return (
    <>
      <h1>Activities</h1>
      {/*{user ? (
        <Link to="./addactivity">
          <button>Add activity</button>
        </Link>
      ) : null} */}

      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <h2>{activity.name}</h2>
            <h3>{activity.description}</h3>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default Activities;
