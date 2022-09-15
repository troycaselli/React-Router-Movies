import React from 'react';
import {Link} from 'react-router-dom';

export default function MovieList(props) {
  const {movies} = props;
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className='movie-text'>
          <div className='movie-card'>
            <h2>{movie.title}</h2>
            <div className="movie-director">
              Director: <em>{movie.director}</em>
            </div>
            <div className="movie-metascore">
              Metascore: <strong>{movie.metascore}</strong>
            </div>
          </div>
        </Link>
        // <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

// function MovieDetails(props) {
//   const { title, director, metascore } = props.movie;

//   return (
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//     </div>
//   );
// }
