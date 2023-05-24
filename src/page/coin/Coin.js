import { async } from 'q';
import { useEffect, useState } from 'react';
import Movie from '../../components/button/movie';
import { useParams } from 'react-router';

const Coin = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoding] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  const x = useParams();
  console.log(x);

  return (
    <>
      <h1>코인</h1>
      {loading ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Coin;
