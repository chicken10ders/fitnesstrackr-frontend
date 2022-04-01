import { useState } from "react";

const API = "https://fitnesstrac-kr.herokuapp.com/api";

const AddRoutine = ({ token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  //const [isPublic, setIsPublic] = useState(null);

  const handleRoutines = async () => {
    const resp = await fetch(`${API}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        routine: {
          name,
          goal,
          isPublic: true,
        },
      }),
    });
    const info = await resp.json();
  };

  return (
    <div>
      <h1>Create a New Routine</h1>
      <form onSubmit={handleRoutines}>
        <input
          required
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="Enter goal..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        {/*<p>
          Make routine public?
          <input
            type="checkbox"
            value={isPublic}
            onChange={(e) => setIsPublic(e.target.value)}
          />
        </p>*/}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRoutine;