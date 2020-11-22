import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Button, Form } from 'react-bootstrap';
import { Notification } from 'rsuite';

import axios from 'axios';

const SongAdd = () => {
  const [Name, setName] = useState('');
  const [Singer, setSinger] = useState('');
  const [Lyric, setLyric] = useState('');
  const [Music, setMusic] = useState('');
  const [Dur, setDur] = useState('');
  const [Url, setUrl] = useState('');
  const [Platform, setPlatform] = useState('');

  const addSong = () => {
    if (
      Name === '' ||
      Singer === '' ||
      Lyric === '' ||
      Music === '' ||
      Dur === '' ||
      Url === '' ||
      Platform === ''
    ) {
      alert('No Empty Inputs Please');
    } else {
      axios
        .post('http://localhost:4000/SongAdd', {
          theName: Name,
          theSinger: Singer,
          theLyric: Lyric,
          theMusic: Music,
          theDur: Dur,
          theUrl: Url,
          thePlatform: Platform,
        })
        .then((res) => {
          Notification['success']({
            title: 'Success!!',
            description: (
              <div>
                <h2>Song Inserted</h2>
                <p>Enjoy!! Navigate to Songs Page to see the inserted Song.</p>
              </div>
            ),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };
  const singerChange = (event) => {
    setSinger(event.target.value);
  };
  const lyricChange = (event) => {
    setLyric(event.target.value);
  };
  const musicChange = (event) => {
    setMusic(event.target.value);
  };
  const urlChange = (event) => {
    setUrl(event.target.value);
  };
  const durChange = (event) => {
    setDur(event.target.value);
  };
  const onPlatform = (event) => {
    setPlatform(event);
  };
  const DropDownPart = (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Select Platform
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Button variant='success' onClick={() => onPlatform('3')}>
            Spotify
          </Button>{' '}
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant='secondary' onClick={() => onPlatform('4')}>
            Jio Saavn
          </Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  return (
    <div>
      <Form style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Form.Label>Song Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Song Name'
          onChange={nameChange}
        />
        <Form.Label>Singer</Form.Label>
        <Form.Control
          type='text'
          placeholder='Singer'
          onChange={singerChange}
        />{' '}
        <Form.Label>Lyricist</Form.Label>
        <Form.Control
          type='text'
          placeholder='Lyricist'
          onChange={lyricChange}
        />{' '}
        <Form.Label>Music By</Form.Label>
        <Form.Control
          type='text'
          placeholder='Music By'
          onChange={musicChange}
        />
        <Form.Label>Image Url(Recommended from IMDB Images)</Form.Label>
        <Form.Control type='url' placeholder='URL' onChange={urlChange} />
        <Form.Label>Duration(Foramt: Xmin Ysec)</Form.Label>
        <Form.Control type='url' placeholder='Xmin Ysec' onChange={durChange} />
        <br />
        {DropDownPart}
        <br />
        <br />
        <Button variant='primary' onClick={addSong}>
          Submit
        </Button>{' '}
      </Form>
    </div>
  );
};

export default SongAdd;
