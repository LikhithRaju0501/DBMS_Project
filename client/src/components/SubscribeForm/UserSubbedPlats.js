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
  const [IsUnsub, setIsUnsub] = useState(false);
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
      setPlatformID(1);
    } else if (PlatName === 'Netflix') {
      setPlatformID(2);
    } else if (PlatName === 'Spotify') {
      setPlatformID(3);
    } else {
      setPlatformID(4);
    }
    setIsUnsub(true);
    setShowModal(true);
    setPlatName(PlatName);
  };

  const openModalUnsub = (PlatName) => {
    if (PlatName === 'Amazon') {
      setPlatformID(1);
    } else if (PlatName === 'Netflix') {
      setPlatformID(2);
    } else if (PlatName === 'Spotify') {
      setPlatformID(3);
    } else {
      setPlatformID(4);
    }
    setIsUnsub(false);
    setShowModal(true);
    setPlatName(PlatName);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ width: '100%', marginLeft: '20%' }}>
      <br />
      <div>
        {' '}
        <Button
          variant='success'
          onClick={() =>
            alert(
              'This indicates that the platform is Subscribed and you can Unsubscribe it to unsee  its content'
            )
          }
        >
          Subscribed
        </Button>{' '}
        <Button
          variant='danger'
          onClick={() =>
            alert(
              'This indicates that the platform is Unubscribed and you can Subscribe it to see  its content'
            )
          }
        >
          Unsubscribed
        </Button>
      </div>{' '}
      <br />
      <br />
      <div>
        {' '}
        {Amazon === 1 ? (
          <Button
            variant='success'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModalUnsub('Amazon')}
          >
            Unsubscribe Amazon
          </Button>
        ) : (
          <Button
            variant='danger'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModal('Amazon')}
          >
            Subscribe Amazon
          </Button>
        )}{' '}
        <br /> <br />
        {Netflix === 1 ? (
          <Button
            variant='success'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModalUnsub('Netflix')}
          >
            Unsubscribe Netflix
          </Button>
        ) : (
          <Button
            variant='danger'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModal('Netflix')}
          >
            Subscribe Netflix
          </Button>
        )}{' '}
        <br /> <br />
        {Spotify === 1 ? (
          <Button
            variant='success'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModalUnsub('Spotify')}
          >
            Unsubscribe Spotify
          </Button>
        ) : (
          <Button
            variant='danger'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModal('Spotify')}
          >
            Subscribe Spotify
          </Button>
        )}
        {'  '}
        <br /> <br />
        {Jio === 1 ? (
          <Button
            variant='success'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModalUnsub('Jio Saavn')}
          >
            Unsubscribe Jio Saavn
          </Button>
        ) : (
          <Button
            variant='danger'
            style={{ width: '100%', marginBottom: 30 }}
            onClick={() => openModal('Jio Saavn')}
          >
            Subscribe Jio Saavn
          </Button>
        )}
        <br /> <br />
      </div>
      <ModalSub
        IsUnsub={IsUnsub}
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
