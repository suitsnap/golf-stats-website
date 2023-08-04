/*const express = require("express"),
  PORT = 5000,
  app = express();



app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
*/

const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

PORT = 5000;

const app = express();
app.use(
  cors({
    origin: `*`,
  })
);

// Set the Content Security Policy header
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", `default-src 'self' ${PORT}`);
  next();
});

app.get("/api/player/:username", async (req, res) => {
  const { username } = req.params;
  const response = await fetch(
    `https://api.mojang.com/users/profiles/minecraft/${username}`
  );
  const data = await response.json();
  res.json(data);
});

// Other routes and middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
