// import express from our node_modules
import express from "express";

// instantiate our express app
const app = express();

// let's pretend we have some data in a database
const owls = [
  { name: "Barn Owl", fact: "Flies silently" },
  {
    name: "Snowy Owl",
    fact: "They hunt by sound, using their specialized feathers around their eyes to deflect sound towards their ears",
  },
  { name: "Funky Owl", fact: "Sings a lot" },
  {
    name: "Tawny Owl",
    fact: "Male tawny owls will occasionally hoot during the middle of the day.",
  },
  { name: "Cuban Giant owl", fact: "Is the largest owl to ever exist" },
  {
    name: "Red Owl",
    fact: " Eyes are typically a sooty-black color, the beak is a pale grey, and the cere (a fleshy patch at the base of the upper mandible of the beak) is flesh-colored.",
  },
  {
    name: "Litte Owl",
    fact: "Little Owls are the smallest species of Owl you may see living in the UK",
  },
];

// our root endpoint
app.get("/", (request, response) => {
  console.log("/ has been called");
  response.json("You are looking at my root route. How roude.");
});

// return an array of data as json
app.get("/owls", (request, response) => {
  response.json(owls);
});

// POST endpoint
app.post("/owls", (request, response) => {
  response.json("This is the POST endpoint of /owls");
});

// endpoints can have as much functionality as you like
app.get("/random", (request, response) => {
  const randomNumber = Math.random(); // 0.4322
  const randomIndex = randomNumber * owls.length; // 4.322
  const randomRounded = Math.floor(randomIndex); // 4
  const randomOwl = owls[randomRounded]; // owls[4]
  response.json(randomOwl);
});

// start the server
app.listen(8080, () => {
  console.log("App is running on port 8080");
});
