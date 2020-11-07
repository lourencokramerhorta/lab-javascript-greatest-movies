// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let SSDramas = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return SSDramas.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let sum = moviesArray.reduce(function (accumulator, movie) {
    return accumulator + (typeof movie.rate === "number" ? movie.rate : 0);
  }, 0);
  average = sum / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  let allDramas = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(allDramas);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderdYears = [...moviesArray];
  orderdYears.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title < b.title ? -1 : 1;
    } else {
      return a.year - b.year;
    }
  });
  return orderdYears;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let movieTitles = moviesArray.map(movie => movie.title);
  movieTitles.sort();
  return movieTitles.slice(0, 20);
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
