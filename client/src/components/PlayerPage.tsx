import React from "react";
import PlayerRender from "./PlayerRender";
import { useParams } from "react-router-dom";

const PlayerPage = () => {
  const { username } = useParams<{ username?: string }>();

  // Check if username is undefined, and provide a default value if needed
  const playerUsername =
    username || "canwepretendthatairplanesinthenightskyarelikeshootingstars";

  return (
    <div>
      <h1>{playerUsername}'s Page</h1>
      <PlayerRender username={playerUsername} />
    </div>
  );
};

export default PlayerPage;
