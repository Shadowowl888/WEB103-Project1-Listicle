import { pool } from "./database.js";
import "./dotenv.js";
import playerData from "../data/players.js";

const createPlayersTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS players;

    CREATE TABLE IF NOT EXISTS PLAYERS (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      team VARCHAR(255) NOT NULL,
      position VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      submittedBy VARCHAR(255) NOT NULL,
      submittedOn TIMESTAMP NOT NULL
    )
  `;

  try {
    const result = await pool.query(createTableQuery);
    console.log("🎉 players table created successfully");
  } catch (err) {
    console.error("⚠️ error creating players table", err);
  };
};

const seedPlayersTable = async () => {
  await createPlayersTable();

  playerData.forEach((player) => {
    const insertQuery = {
      text: "INSERT INTO players (name, team, position, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)"
    };

    const values = [
      player.name,
      player.team,
      player.position,
      player.image,
      player.description,
      player.submittedBy,
      player.submittedOn
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting player", err);
        return
      };
      console.log(`✅ ${player.name} added successfully`);
    });
  });
};

seedPlayersTable();