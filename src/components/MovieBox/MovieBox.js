import "./MovieBox.css";
import Modal from '../Modal/Modal';
const MovieBox = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  backdrop_path,
  id,
}) => {
  const API_IMG = "https://image.tmdb.org/t/p/w300";

  

  return (
    <div className="card text-center  m-1 movieBox " data-bs-toggle='modal'
    data-bs-target={`#id${id}`}>
      
        
          <div>
            <span className="movie-voting ">{vote_average}</span>
            <img
              className="card-img-top"
              src={API_IMG + poster_path}
              alt="img_movies"
              
            />
            <label className="text-light py-2  ">{title}</label>
          </div>
          <Modal
					id={`id${id}`}
					title={title}
					img={API_IMG + backdrop_path}
					overview={overview}
					releaseDate={release_date}
				/>
   
    </div>
  );
};

export default MovieBox;
