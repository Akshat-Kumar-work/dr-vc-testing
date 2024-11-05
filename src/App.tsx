import Conference from "./Conference";
import JoinForm from "./JoinForm";
import { useEffect } from "react";
import { useHMSStore } from "@100mslive/react-sdk";
import { useHMSActions,selectIsConnectedToRoom } from "@100mslive/react-sdk";

export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjcxNjg2OWEzM2NlNzRhYjliZTk0M2Y0Iiwicm9vbV9pZCI6IjY3MjlkOGQ1M2UyNjRlNzI1YzdlYjg1MCIsInVzZXJfaWQiOiIxMCIsInJvbGUiOiJkb2N0b3IiLCJ0eXBlIjoiYXBwIiwidmVyc2lvbiI6MiwiaWF0IjoxNzMwNzk1NzMzLCJuYmYiOjE3MzA3OTU3MzMsInN1YiI6ImFwaSIsImV4cCI6MTczMDg4MjEzMywianRpIjoiMDI1NzNlNDUtZDA1Zi00YjgzLThjMmUtMTRmOTQzOGNhZjFlIn0.CsT7i1LqDdFDQKK-v9a6vWqdk-2OI1RgriI3eM7gtCg"; // Replace this with your actual token

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      {isConnected ? <Conference /> : <JoinForm authToken={authToken} />} {/* Pass the auth token here */}
    </div>
  );
}
