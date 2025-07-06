import React from 'react'
import PropTypes from 'prop-types';
import './Hero.css'
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Hero = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies to display.</div>;
  }

  function extractYouTubeId(url) {
      const regex = /(?:youtube\.com.*(?:v=|\/embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      if (match) return match[1];
      console.error("Invalid YouTube URL:", url);
      return null;
  }


  return (
    <div>
      <Carousel>
        {movies?.map((movie) => {
            return (
                <Paper key={movie.id} className="movie-card-paper">
                    <div className="movie-card-container">
                        <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }} >
                            <div className="movie-detail">
                                <div className="movie-poster">
                                    <img src={movie.poster} alt={movie.title} className="movie-poster-image"/>
                                </div>
                                <div className='movie-detail'>
                                    <h4 className="movie-title">{movie.title}</h4>
                                </div>
                                <div className="movie-button-container">
                                  <Link to={extractYouTubeId(movie.trailerLink) ? `/trailer/${extractYouTubeId(movie.trailerLink)}` : "#"} >
                                    <div className="play-button-icon-container">
                                      <FontAwesomeIcon 
                                      className="play-button-icon" 
                                      icon={faCirclePlay} />
                                    </div>
                                  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            )
        }
        )}
      </Carousel>
    </div>
  );
};



Hero.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      trailerLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero