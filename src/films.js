

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
 
  let result =  movies.map(movie => movie.director);
 
 return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let arrDirector = movies.filter((movie) => movie.director == director);
 
 return arrDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let arrDirector = movies.filter((movie) => movie.director == director);
  let average = arrDirector.map(el => parseFloat(el["score"]))
                          .reduce((a,b) => a+b) / arrDirector.length;
 
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movie) {
  let ordenat = movie.map((movie) => {return movie.title;})
                    .sort()
                    .slice(0,20);
  //console.log("EXERCICE 4 ->", ordenat);
  return ordenat;

}

// Exercise 5: Order by year, ascending
function orderByYear(movie) {
 
 let ordenats = movie.map((movie) => movie)
                  .sort((a,b)=>{
   if (a.year === b.year){if (a.title > b.title){ return 1;
   }else{return -1;}}
   return a.year - b.year
 }); 
 //console.log("EXERCICE 5 ->", ordenats); 29passed
 return ordenats;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let category = movies.filter((movie) => movie.genre == genre);
  let filteredList = category.map(peli => peli.score);
  let filteredEmpty = filteredList.filter(Number => Number != '')
                                  .filter(Number => Number != "")
                                  .filter(Number => Number != " ");
  let averageC = filteredList.reduce((sum, score)=> sum + score ) / filteredEmpty.length;
 
  //take out the function calculate average the score without result, **don't take the scores with value zero***
  //let filtered0 = filteredList.filter(Number => Number != 0);
  //let averageC = filteredList.reduce((sum, score)=> sum + score ) / filtered0.length;
 
 console.log("EXERCICE 6 ->", filteredEmpty);
  return averageC;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

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
function bestFilmOfYear(movies) {
let years = movies.filter((movie) => movie.year)
                  .reduce((acc, i)=>(i.score > acc.score ? i : acc));
let concat = [];
concat.push(years);

 // console.log("EXERCICE 8 ->", concat);
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
