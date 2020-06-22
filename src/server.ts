import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send({ message: "Hello World" });
});

app.listen(3333);
