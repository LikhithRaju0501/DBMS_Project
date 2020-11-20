import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import CardDisplayComp from '../components/Movies_Songs/CardDisplayComp';
import NavBarComp from '../components/NavBarComp';
import axios from 'axios';
import { Spinner, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SongScreen = ({ location }) => {
  const [Name, setName] = useState(null);
  const [UserID, setUserID] = useState(null);
  const [Songs, setSongs] = useState(null);

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);
    setName(name);
    setUserID(user_id);
    //setName(name);

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
  }, [location]);

  return (
    <div>
      <NavBarComp Name={Name} UserID={UserID} />

      <Link style={{ textDecoration: 'none' }} to='/SongAdd'>
        <Button style={{ marginLeft: 50 }} variant='success'>
          Add Song
        </Button>
      </Link>

      {Songs ? (
        Songs.map((song) => (
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

export default SongScreen;
