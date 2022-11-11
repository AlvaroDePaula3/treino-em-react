const { error } = require("console");
const fetch = require("node-fetch"); 

fetch ("https://pokeapi.co/api/v2/pokemon/")
.then((response)=> response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));