const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Your account is alive! Presence is ready!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is Ready!");
  });
}

module.exports = keepAlive;
