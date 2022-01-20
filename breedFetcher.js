const request = require('request');

const breedDescription = (url, breedName) => {
  
  request(url + breedName, (error, response, body) => {
    
    if (error) {
      console.log('Error');
    }
    const data = JSON.parse(body);
    const catBreed = data[0];
    if (catBreed) {
      console.log(catBreed.description);
      return catBreed.description;
    }
    console.log(`${breedName} breed not found`);
  });
};
breedDescription("https://api.thecatapi.com/v1/breeds/search/?q=", process.argv[2]);