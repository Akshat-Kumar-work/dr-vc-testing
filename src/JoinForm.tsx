import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinForm({ authToken }:any) { // Accept authToken as a prop
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    roomCode: ""
  });

  const handleInputChange = (e:any) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const { name } = inputValues;

    try {
      // Directly pass the auth token without fetching from the backend
      await hmsActions.join({
        userName: name,
        authToken
      });
    } catch (error) {
      console.error("Error joining the room:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className="input-container">
        <input
          required
          name="name"
          type="text"
          value={inputValues.name}
          onChange={handleInputChange}
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          required
          name="roomCode"
          type="text"
          value={inputValues.roomCode}
          onChange={handleInputChange}
          placeholder="Room code"
        />
      </div>
      <button type="submit">Join</button>
    </form>
  );
}

export default JoinForm;
