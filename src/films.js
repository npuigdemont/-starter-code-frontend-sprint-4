//import {movies} from './data';
//const movies = require('data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
 // let result = movies.map(function(m){return m.get('director')});
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
  //let omitNan = category.map(el => isNaN(el["score"]) ? parseInt(0) : parseFloat(el["score"]));
  //let averageC = omitNan.reduce((a,b) => a+b) / omitNan.length;
 /* let filteredList = omitNan.map (item => ({
    score: item["score"],
    genre: item["genre"]
  }))*/
  let filteredList = category.map(peli => Number(peli.score));
  let averageC = filteredList.reduce((sum, score)=> sum + score ) / category.length
  //let omitnan =  inputsArray[0].value;  tot += isNaN(val0 || val0=="")? 0 : parseFloat(val0);
  //let noNumbers = category.filter(el["score"] => !Number.isNaN(score));
  //let omitNan = isNaN ? parseInt(Number) : alert;
 // let averageC = omitNan.map(el => parseFloat(el["score"]), omitNan).reduce((a,b) => a+b) / category.length;
  //33passed no reporta amb score buit 
 // let averageC = category.map(el => parseFloat(el["score"])).reduce((a,b) => { isNaN ? (a+b) / category.length-1 :(a+b) / category.length});
 //if ("score" == isNaN) {return ""}
 console.log("EXERCICE 6 ->", averageC);
  return averageC;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
//let hours = movies.map({ if (duration.indexof[0] == 2){duration = 120+ duration.idexeof}};)
let clonedMovies = JSON.parse(JSON.stringify(movies));
return clonedMovies.map((movie) => {

  let duration = movie.duration.split(' ')
  let hour = 0
  let min = 0

  if (duration.length > 1) {
    hour = Number(duration[0].split('h')[0])
    min = Number(duration[1].split('min')[0])
  } else {
    if(duration[0].split('min').length > 1) {
      min = Number(duration[0].split('min')[0])
    } else {
      hour = Number(duration[0].split('h')[0])
    }
  }

  movie.duration = hour * 60 + min
  return movie
})
}



// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
 // let years = movies.find(function(movie){return movie.year == year});
  //let category = movies.filter((movie) => movie.genre == genre);
  let years = movies.filter((movie) => movie.year);
 // let better = movies.reduce((el) => Math.max(el["score"]));
//movies.
//let better = year.reduce((a, b) => Math.max(a, b), 0);
let better = years.reduce((acc, i)=>(i.score > acc.score ? i : acc));
let concat = [];
concat.push(better);

  //el => parseFloat(el["score"])
  
  console.log("EXERCICE 8 ->", concat);
  return concat;
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
