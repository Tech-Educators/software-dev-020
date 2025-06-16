// import express from our node_modules
import express from "express";

// instantiate our express app
const app = express(); // now "app" is a massiv object with loads of methods

// our root endpoint
app.get("/", (request, response) => {
  console.log("/ has been called"); // this will appear in the terminal (the server) not the broswer (the client)
  response.json("You are looking at my root route. How roude.");
});

// start the server
app.listen(8080, () => {
  console.log("App is running on port 8080");
});
