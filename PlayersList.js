import React from "react";
import Player from "./Player";

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const PlayersList = () => {
  return (
    <div style={listStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
