import Conference from "./Conference";
import JoinForm from "./JoinForm";
import { useEffect } from "react";
import { useHMSStore } from "@100mslive/react-sdk";
import { useHMSActions,selectIsConnectedToRoom } from "@100mslive/react-sdk";

export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5IjoiNjcxNjg2OWEzM2NlNzRhYjliZTk0M2Y0Iiwicm9vbV9pZCI6IjY3MWYzMzY2M2UyNjRlNzI1YzdkNjNmMyIsInVzZXJfaWQiOiIxIiwicm9sZSI6ImRvY3RvciIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJpYXQiOjE3MzAwOTgzOTMsIm5iZiI6MTczMDA5ODM5Mywic3ViIjoiYXBpIiwiZXhwIjoxNzMwMTg0NzkzLCJqdGkiOiJmNjAyMWUzYS1iZTJhLTQ3ODEtYjkxOC0wMWU3YTMwNDZmMTYifQ.Nw81-Z7zwfiaIxg1hVN3hU7M8NQPArz-bMAAhHy4oqk"; // Replace this with your actual token

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
