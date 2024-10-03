import express from "express";
import "./config/dotenv.js";
import { pool } from "./config/database.js";
import playersRouter from "./routes/players.js";

const app = express();

app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));
app.use("/players", playersRouter);

app.get("/", (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">GridIron Scout API</h1>');
});

app.get("/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM players ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("⚠️ Error fetching data", err);
    res.status(500).send("⚠️ Error fetching data");
  };
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});