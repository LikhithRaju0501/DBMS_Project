import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ModalSub from './ModalSub';

const UserSubbedPlats = ({ UserID, Name }) => {
  const [Amazon, setAmazon] = useState(0);
  const [Netflix, setNetflix] = useState(0);
  const [Spotify, setSpotify] = useState(0);
  const [Jio, setJio] = useState(0);
  const [ShowModal, setShowModal] = useState(false);
  const [PlatName, setPlatName] = useState(false);
  const [PlatformID, setPlatformID] = useState(0);

  useEffect(() => {
    axios
      .post('http://localhost:4000/mySubs', {
        theUserID: UserID,
      })
      .then((res) => {
        res.data.map((sub) => {
          if (sub.P_ID === 1) {
            setAmazon(1);
          } else if (sub.P_ID === 2) {
            setNetflix(1);
          } else if (sub.P_ID === 3) {
            setSpotify(1);
          } else if (sub.P_ID === 4) {
            setJio(1);
          }
          return null;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [UserID]);
  const openModal = (PlatName) => {
    if (PlatName === 'Amazon') {
      console.log('Amazon to be sub');
      setPlatformID(1);
    } else if (PlatName === 'Netflix') {
      console.log('Netflix to be sub');
      setPlatformID(2);
    } else if (PlatName === 'Spotify') {
      console.log('Spotify to be sub');
      setPlatformID(3);
    } else {
      console.log('Jio  to be sub');
      setPlatformID(4);
    }
    setShowModal(true);
    setPlatName(PlatName);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div style={{ float: 'right', marginRight: 50 }}>
        {' '}
        <Button variant='success'>Subscribed</Button>{' '}
        <Button variant='danger'>Unsubscribed</Button>
      </div>{' '}
      <br />
      <br /> <hr />
      <div style={{ marginLeft: 500, marginRight: 'auto' }}>
        {' '}
        {Amazon === 1 ? (
          <Button variant='success'>Amazon</Button>
        ) : (
          <Button variant='danger' onClick={() => openModal('Amazon')}>
            Amazon
          </Button>
        )}{' '}
        {Netflix === 1 ? (
          <Button variant='success'>Netflix</Button>
        ) : (
          <Button variant='danger' onClick={() => openModal('Netflix')}>
            Netflix
          </Button>
        )}{' '}
        {Spotify === 1 ? (
          <Button variant='success'>Spotify</Button>
        ) : (
          <Button variant='danger' onClick={() => openModal('Spotify')}>
            Spotify
          </Button>
        )}
        {'  '}
        {Jio === 1 ? (
          <Button variant='success'>Jio Saavn</Button>
        ) : (
          <Button variant='danger' onClick={() => openModal('Jio Saavn')}>
            Jio Saavn
          </Button>
        )}
      </div>
      <ModalSub
        closeModal={closeModal}
        ShowModal={ShowModal}
        PlatName={PlatName}
        PlatformID={PlatformID}
        UserID={UserID}
        Name={Name}
      />
    </div>
  );
};

export default UserSubbedPlats;
