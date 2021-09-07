import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import conn from "./conn.js";
import users from "./routes/users.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;


app.use("/api/users", users);

app.use("*", (req, res) => {
  res.status(400).json({ error: "Invalid Request URL" });
});

if (conn) {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}
