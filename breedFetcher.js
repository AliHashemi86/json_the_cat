const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  
  request("https://api.thecatapi.com/v1/breeds/search/?q=" + breedName, (error, response, body) => {

    if (error) {
      callback(error, null);
    }
  
    const data = JSON.parse(body);
    const catBreed = data[0];
    if (catBreed) {
      callback(null, catBreed.description);
    }
    else {
      callback(`${breedName} breed not found`, null);
    }
  });
};

module.exports = { fetchBreedDescription };