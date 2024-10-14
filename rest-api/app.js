const express = require("express");
const pg = require("pg");
const cors = require("cors");
const app = express();

var conString = "postgres://postgres:admin@localhost:5432/test";

var client = new pg.Client(conString);
client.connect((err) => {
  if (err) console.log("error connecting to db");
  else console.log("DB Connection success");
});

app.use(cors());

app.listen(8088, () => {
  console.log("server started");
});

app.get("/properties", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM property");
    res.status(200).send(response.rows);
  } catch (err) {
    res.status(404).send("Error while getting datd");
  }
});

app.get("/finance", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM finance");
    res.status(200).send(response.rows);
  } catch (err) {
    res.status(404).send("Error while getting data");
  }
});

app.post("/properties", async (req, res) => {
  try {
    const testData = [
      "CasaGrande",
      "Flats",
      50,
      40,
      30,
      20,
      "2024-10-13T18:30:00.000Z",
    ];
    const query =
      "insert into property (owner_name,property_name,total_units, filled_units, vacent_units, occupany_rate,last_maintenance_date) values ($1,$2,$3,$4,$5,$6,$7)";
    await client.query(query, testData);
    res.status(201).send("Data Saved");
  } catch (err) {
    res.status(404).send("Error while saving datda");
  }
});

app.post("/finance", async (req, res) => {
  try {
    const testData = ["CasaGrande", "Flats", 40000, 1000, 80000];
    const query =
      "insert into finance (owner_name,property_name,income,expenses,net_profit) values ($1,$2,$3,$4,$5)";
    await client.query(query, testData);
    res.status(201).send("Data Saved");
  } catch (err) {
    res.status(404).send("Error while saving data");
  }
});

app.delete("/finance/:id", async (req, res) => {
  try {
    const query = "delete from finance where id = " + req.params.id;
    await client.query(query);
    res.status(204).send("");
  } catch (err) {
    res.status(404).send("Error while deleting data");
  }
});

app.delete("/properties/:id", async (req, res) => {
  try {
    const query = "delete from property where id = " + req.params.id;
    client.query(query);
    res.status(204).send("");
  } catch (err) {
    res.status(404).send("Error while deleting data");
  }
});
