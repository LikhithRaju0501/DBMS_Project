import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeReviewCard from '../components/Movies_Songs/CardMaterialUI';
import './CSS/SignUpAbout.css';
import SideNavBar from '../components/SideNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SongScreen = ({ location }) => {
  const [Name, setName] = useState(null);
  const [UserID, setUserID] = useState(null);
  const [Songs, setSongs] = useState(null);

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);
    setName(name);
    setUserID(user_id);

    axios
      .get('http://localhost:4000/songs')
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <div className='Music-container'>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>
        <br />

        <div style={{ marginLeft: '10%' }}>
          <br />
          <Row>
            {Songs ? (
              Songs.map((song) => (
                <Col key={song.M_ID} sm>
                  {' '}
                  <RecipeReviewCard
                    key={song.SONG_ID}
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
                </Col>
              ))
            ) : (
              <div>
                <Spinner
                  animation='border'
                  style={{ marginLeft: 750 }}
                  role='status'
                >
                  <span className='sr-only'>Loading...</span>
                </Spinner>
              </div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SongScreen;

// {Songs ? (
//   Songs.map((song) => (
//     <div key={song.SONG_ID}>
//
//     </div>
//   ))
// ) : (
//   <Spinner
//     animation='border'
//     style={{ marginLeft: 750 }}
//     role='status'
//   >
//     <span className='sr-only'>Loading...</span>
//   </Spinner>
// )}
