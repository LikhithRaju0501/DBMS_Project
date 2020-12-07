import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardDisplayComp from '../Movies_Songs/CardDisplayComp';
import CardMaterialUI from '../Movies_Songs/CardMaterialUI';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../screens/CSS/SignUpAbout.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubbedSongPlatform = ({ PlatID }) => {
  const [Songs, setSongs] = useState(null);

  useEffect(() => {
    //Getting Movies
    axios
      .get('http://localhost:4000/songs')
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='MusicDesc-container'>
      <Row style={{ marginLeft: '20%' }}>
        {Songs ? (
          Songs.filter((serie) => serie.P_ID === PlatID).map((song) => (
            <Col key={song.SONG_ID} sm={6}>
              <CardMaterialUI
                Name={song.SONG_NAME}
                Singer={song.SONG_SINGER}
                Lyricist={song.SONG_LYRICIST}
                Music={song.SONG_MUSIC}
                Duration={song.SONG_DURATION}
                Platform={song.P_ID === 3 ? 'Spotify' : 'Jio Saavn'}
                ReleaseYear={song.SONG_YEAR}
                imgLink={song.SONG_IMAGE}
              />{' '}
              <br />
              {/* <CardDisplayComp
              key={song.SONG_ID}
              Name={song.SONG_NAME}
              Singer={song.SONG_SINGER}
              Lyricist={song.SONG_LYRICIST}
              Music={song.SONG_MUSIC}
              Duration={song.SONG_DURATION}
              Platform={song.P_ID === 3 ? 'Spotify' : 'Jio Saavn'}
              ReleaseYear={song.SONG_YEAR}
              imgLink={song.SONG_IMAGE}
            /> */}
            </Col>
          ))
        ) : (
          <Spinner animation='border' style={{ marginLeft: 750 }} role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        )}
      </Row>
    </div>
  );
};

export default SubbedSongPlatform;
