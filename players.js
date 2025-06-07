// src/players.js
const players = [
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    nationality: "Argentina",
    jerseyNumber: 10,
    age: 36,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg",
  },
  {
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    nationality: "France",
    jerseyNumber: 7,
    age: 25,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kylian_Mbappé_2019.jpg",
  },
  {
    name: "Megan Rapinoe",
    team: "OL Reign",
    nationality: "USA",
    jerseyNumber: 15,
    age: 39,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Megan_Rapinoe_-_2011_02.jpg",
  },
  {
    name: "Erling Haaland",
    team: "Manchester City",
    nationality: "Norway",
    jerseyNumber: 9,
    age: 24,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Erling_Haaland_2023.jpg",
  },
];

// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";

const cardStyle = {
  width: "18rem",
  margin: "1rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
};

const Player = ({
  name = "Unknown Player",
  team = "No Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/150",
}) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={`${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default players;
