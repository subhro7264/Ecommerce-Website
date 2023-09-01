// import React from "react";

// import Movie from "./Movie";
import classes from "./MoviesList.module.css";

// const MovieList = (props) => {
//   return (
//     <ul className={classes["movies-list"]}>
//       {props.movies.map((movie) => (
//         <Movie
//           key={movie.id}
//           title={movie.title}
//           releaseDate={movie.releaseDate}
//           openingText={movie.openingText}
           
//         />
    
//       ))}

//     </ul>
//   );
// };

// export default MovieList




// MoviesList.js

import React from "react";

const MoviesList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <div>{movie.openingText}</div>
          <div>{movie.releaseDate}</div>
          <button onClick={() => props.onDelete(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;


