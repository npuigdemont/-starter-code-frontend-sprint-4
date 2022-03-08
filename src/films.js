//import {movies} from './data';
//const movies = require('data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
 
  let result =  movies.map(movie => movie.director);
 // console.log("EXERCICE 1 ->", result);
 return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let arrDirector = movies.filter((movie) => movie.director == director);
 // let arrDirector = result.filter((movie) => {return movie.director;})
 //let result = movies.filter(director => movies.director);
 //console.log("EXERCICE 2 ->", arrDirector);
 return arrDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let arrDirector = movies.filter((movie) => movie.director == director);
  let average = arrDirector.map(el => parseFloat(el["score"])).reduce((a,b) => a+b) / arrDirector.length;
  //let arrDirector = result.filter((movie) => {return movie.director;})
  //let average = arrDirector.reduce((score) => {return Sum(movie.score)/arrDirector.length});
 // console.log("EXERCICE 3 ->", average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movie) {
  let ordenat = movie.map((movie) => {return movie.title;})
  ordenat.sort();
  //console.log("EXERCICE 4 ->", ordenat);
  return ordenat.slice(0,20);

}

// Exercise 5: Order by year, ascending
function orderByYear(movie) {
 /* let ordenat = movie.map((movie) => {return movie.title;})
  ordenat.sort();
 let ordenats = ordenat.map((movie) => {return movie.year;})
 ordenats.sort();
 console.log(ordenats);
 return ordenats; 26passed*/ 
 let ordenats = movie.map((movie) => movie).sort((a,b)=>{
   if (a.year === b.year){if (a.title > b.title){
     return 1;
   }else{return -1;}}
   return a.year - b.year
 }); 
 //console.log("EXERCICE 5 ->", ordenats); 29passed
 return ordenats;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let category = movies.filter((movie) => movie.genre == genre);
  let averageC = category.map(el => parseFloat(el["score"])).reduce((a,b) => a+b) / category.length;
  //33passed
  return averageC;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies, duration) {
//let hours = movies.map({ if (duration.indexof[0] == 2){duration = 120+ duration.idexeof}};)

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
