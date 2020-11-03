/* eslint-disable no-console */
const express = require('express');
const router = require('./router');
const db = require("./db");

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(router);


(async () => {
  try {
    await db.connect;
  } catch (error) {
    console.error('ERROR CONNECTING TO DATABASE');
  }
  app.listen(PORT, () => {
    console.log("Listening on port", PORT);
  });
})();