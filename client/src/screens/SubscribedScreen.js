import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import amazon from '../animeFiles/amazon.json';
import netflix from '../animeFiles/netflix.json';
import spotify from '../animeFiles/spotify.json';
import Jio from '../animeFiles/Jio.json';
import axios from 'axios';
import SubbedCards from '../components/SubbedCards';
import { Spinner } from 'react-bootstrap';
import './CSS/SignUpAbout.css';
import SideNavBar from '../components/SideNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubscribedScreen = ({ location }) => {
  const [Name, setName] = useState(null);
  const [UserID, setUserID] = useState(null);
  const [Subbed, setSubbed] = useState(null);

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);
    setName(name);
    setUserID(user_id);
    axios
      .post('http://localhost:4000/mySubs', {
        theUserID: UserID,
      })
      .then((res) => {
        setSubbed(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location, UserID]);
  return (
    <div className='Subbed-container'>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>

        <div style={{ marginLeft: '30%' }}>
          <br />
          <Row>
            {Subbed ? (
              Subbed.map((sub, index) => (
                <div key={index}>
                  <Col sm>
                    {sub.P_ID === 1 ? (
                      <SubbedCards
                        PlatName='Amazon'
                        AnimeName={amazon}
                        Stars={sub.USER_STAR}
                        Review={sub.USER_REVIEW}
                        Name={Name}
                        UserID={UserID}
                        platID={1}
                        Type='Movie'
                        Width='500px'
                      />
                    ) : null}{' '}
                  </Col>
                  <br />
                  <Col sm>
                    {sub.P_ID === 2 ? (
                      <SubbedCards
                        PlatName='Netflix'
                        AnimeName={netflix}
                        Stars={sub.USER_STAR}
                        Review={sub.USER_REVIEW}
                        Name={Name}
                        UserID={UserID}
                        Type='Movie'
                        platID={2}
                        Width='500px'
                      />
                    ) : null}{' '}
                  </Col>
                  <Col sm>
                    {sub.P_ID === 3 ? (
                      <SubbedCards
                        PlatName='Spotify'
                        AnimeName={spotify}
                        Stars={sub.USER_STAR}
                        Review={sub.USER_REVIEW}
                        Name={Name}
                        UserID={UserID}
                        Type='Song'
                        platID={3}
                        Width='500px'
                      />
                    ) : null}{' '}
                  </Col>
                  <Col sm>
                    {sub.P_ID === 4 ? (
                      <SubbedCards
                        PlatName='JIO Saavn'
                        AnimeName={Jio}
                        Stars={sub.USER_STAR}
                        Review={sub.USER_REVIEW}
                        Name={Name}
                        UserID={UserID}
                        Type='Song'
                        platID={4}
                        Width='500px'
                      />
                    ) : null}
                  </Col>
                </div>
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

export default SubscribedScreen;
