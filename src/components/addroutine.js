import { useState } from "react";

const API = "https://fitnesstrac-kr.herokuapp.com/api";

const AddRoutine = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  //const [isPublic, setIsPublic] = useState(null);

  const token = localStorage.getItem("token");

  const handleRoutines = async () => {
    const resp = await fetch(`${API}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        routine: {
          name: name,
          goal: goal,
          isPublic: null,
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRoutine;
