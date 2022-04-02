import { useState } from "react";

const API = "https://fitnesstrac-kr.herokuapp.com/api";

const AddActivity = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleActivities = async () => {
    const resp = await fetch(`${API}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        routine: {
          name,
          description,
        },
      }),
    });
    const info = await resp.json();
  };

  return (
    <div>
      <h1>Create a New Activity</h1>
      <form onSubmit={handleActivities}>
        <input
          required
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddActivity;
