import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {
    let params = useParams();
    let key = params.ytTrailerId;
    console.log(`https://www.youtube.com/watch?v=${key}`);

  return (
    <div className="react-player-container">
      {key != null ? (
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
          playing
          muted
        />)
        : null }
    </div>
  );
};

export default Trailer;
