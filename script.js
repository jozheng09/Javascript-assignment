let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added" + "\n----------------");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    var index = 0;
    console.log("Printing all movies...");
    while(index < allMovies.length) {
        console.log(allMovies[index] + "\n");
        index++;
    }
    console.log("You have " + allMovies.length + " in total" + "\n----------------");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    var index = 0;
    var count = 0;
    console.log("printing movie that has a rating higher than " + rating + "\n----------------");
    while(index < allMovies.length) {
        if (allMovies[index].rating > rating) {
            console.log(allMovies[index] + "\n");
            count++;
        }
    }
    console.log("In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie..." + "\n----------------");
    var index = 0;
    var index2 = 0;
    var findIndex = 0;
    while(index < allMovies.length) {
        if (allMovies[index].title = title) {
            findIndex = index;
        }
    }
    if (allMovies[findIndex].haveWatched == true) {
        allMovies[findIndex].haveWatched == false;
    } else {
        allMovies[findIndex].haveWatched == true;
    }
    console.log("Printing all movies...");
    while(index2 < allMovies.length) {
        console.log(allMovies[index] + "\n");
        index2++;
    }
    console.log("You have " + allMovies.length + " in total" + "\n----------------");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);