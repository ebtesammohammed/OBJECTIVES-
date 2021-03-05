const path = require("path");
const fs = require("fs");

let dataPath = path.join(__dirname, "../chirps.json");

let chirps = [
  { username: "Bob", msg: "hey" },
  { username: "Jake", msg: "what up" },
  { username: "Afrah", msg: "how are you?" },
  { username: "Robert", msg: "why did you do that?" },
  { username: "Jeremiah", msg: "where are you?" },
];

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
  if (err) console.log(err);
});

//fs.readFile(dataPath, (err, data) => {
//   if (err) console.log(`Error occurred: ${err}`);

//   console.log(JSON.parse(data));
//});
