import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardDisplayComp from '../Movies_Songs/CardDisplayComp';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubbedSongPlatform = ({ PlatID }) => {
  const [Songs, setSongs] = useState(null);

  useEffect(() => {
    //Getting Movies
    axios
      .get('http://localhost:4000/songs')
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {Songs ? (
        Songs.filter((serie) => serie.P_ID === PlatID).map((song) => (
          <CardDisplayComp
            key={song.SONG_ID}
            Name={song.SONG_NAME}
            Singer={song.SONG_SINGER}
            Lyricist={song.SONG_LYRICIST}
            Music={song.SONG_MUSIC}
            Duration={song.SONG_DURATION}
            Platform={song.P_ID === 3 ? 'Spotify' : 'Jio Saavn'}
            ReleaseYear={song.SONG_YEAR}
            imgLink={song.SONG_IMAGE}
          />
        ))
      ) : (
        <Spinner animation='border' style={{ marginLeft: 750 }} role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default SubbedSongPlatform;
