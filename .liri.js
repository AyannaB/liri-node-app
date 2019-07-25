require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var spotifyKey = new Spotify(keys.spotify);
var liriOperator = process.argv[2];
var search = process.argv.slice(3).join(" ");

function liri() {
    if (liriOperator === "concert-this") {
        bandsInTown();
    } else if (liriOperator === "spotify-this-song") {
        spotify();
    } else if (liriOperator === "movie-this") {
        omdb();
    } else if (liriOperator === "do-what-it-says") {
        dwits();
    }
}

function omdb() {
    var queryURL = 'http://www.omdbapi.com/?t=' + search + '&y=&plot=short&apikey=trilogy';
    axios.get(queryURL).then(
        function (response) {
            var res = response.data;

            console.log("Title: " + res.Title);
            console.log("Year: " + res.Year);
            console.log("IMDB Rating: " + res.imdbRating);
            console.log("Rotten Tomatoes Rating: " + res.Ratings[1].Value);
            console.log("Country: " + res.Country);
            console.log("Movie Language: " + res.Language);
            console.log("Plot: " + res.Plot);
            console.log("Cast: " + res.Actors);
        })
    }