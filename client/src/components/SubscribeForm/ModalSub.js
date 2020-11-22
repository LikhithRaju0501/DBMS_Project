import React, { useState } from 'react';
import { Modal } from 'rsuite';
import Button from 'react-bootstrap/Button';
import { Input } from 'rsuite';
import axios from 'axios';

const ModalSub = ({
  IsUnsub,
  ShowModal,
  closeModal,
  PlatName,
  PlatformID,
  UserID,
  Name,
}) => {
  const [Review, setReview] = useState(null);
  const [Stars, setStars] = useState(null);
  const subscribePlatform = () => {
    axios
      .post('http://localhost:4000/SubPlat', {
        theUserID: UserID,
        thePlatformID: PlatformID,
        theReview: Review,
        theStars: Stars,
      })
      .then((res) => {
        window.location.assign(
          `http://localhost:3000/MySubbed?name=${Name}&user_id=${UserID}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const unsubscribePlatform = () => {
    axios
      .post('http://localhost:4000/UnSubPlat', {
        theUserID: UserID,
        thePlatformID: PlatformID,
      })
      .then((res) => {
        window.location.assign(
          `http://localhost:3000/MySubbed?name=${Name}&user_id=${UserID}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reviewChangeHandler = (event) => {
    setReview(event);
  };
  const starsChangeHandler = (event) => {
    setStars(event);
  };

  return (
    <div className='modal-container'>
      <Modal show={ShowModal} onHide={closeModal}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          {IsUnsub ? (
            <div>
              <h2>Do you want to Subscribe {PlatName}?</h2>
              <p>Please tell us what you feel about {PlatName} below!!</p>
              <Input
                onChange={(event) => reviewChangeHandler(event)}
                style={{ width: 300 }}
                placeholder='Review'
              />{' '}
              <br />
              <Input
                onChange={(event) => starsChangeHandler(event)}
                style={{ width: 100 }}
                placeholder='Stars of 10'
              />{' '}
              <br />
              <Button variant='info' onClick={() => subscribePlatform()}>
                Subscribe
              </Button>{' '}
              <Button variant='dark' onClick={() => closeModal()}>
                Cancel
              </Button>
            </div>
          ) : (
            <div>
              <h2>Do you want to Unsubscribe {PlatName}?</h2>
              <br />
              <Button variant='warning' onClick={() => unsubscribePlatform()}>
                UnSubscribe
              </Button>
              {'  '}
              <Button variant='dark' onClick={() => closeModal()}>
                Cancel
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalSub;
