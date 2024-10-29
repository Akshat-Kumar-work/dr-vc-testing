// src/Peer.jsx
import { useVideo } from "@100mslive/react-sdk";

function Peer({ peer }:any) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack
  });
  return (
    <div className="peer-container">
      <video
        ref={videoRef}
        autoPlay
        muted={peer.isLocal}
        className="peer-video"
      />
      <div className="peer-name">{peer.name}</div>
    </div>
  );
}

export default Peer;
