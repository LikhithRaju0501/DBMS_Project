import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HeadingComp from '../components/HeadingComp';
import Lottie from 'lottie-react';
import movieanime from '../animeFiles/movieanime.json';
import music from '../animeFiles/music.json';

const SignInScreen = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = () => {
    if (Name === '' || Password === '' || Email === '') {
      alert('Details Incompete');
    } else {
      axios
        .post('http://localhost:4000/signup', {
          theName: Name,
          theEmail: Email,
          thePassword: Password,
        })
        .then((res) => {
          if (res.data === 'ERROR') {
            console.log('ERROR CAUUUUGTH');
            alert(
              'We are facing a Problem ,EmailID already has a acoount(Try to Login) '
            );
          } else {
            const user_id = res.data[0].USER_ID;
            setName('');
            setEmail('');
            setPassword('');
            window.location.assign(
              `http://localhost:3000/MySubbed?name=${Name}&user_id=${user_id}`
            );
          }
        })
        .catch((err) => {
          setName('');
          setEmail('');
          setPassword('');
          console.log(err);
        });
    }
  };
  const loginHandler = () => {
    axios
      .post('http://localhost:4000/login', {
        theName: Name,
        theEmail: Email,
        thePassword: Password,
      })
      .then((res) => {
        if (res.data === 'ERROR') {
        } else {
          const user_pass = res.data[0].USER_PASSWORD;
          const user_name = res.data[0].USER_NAME;
          const user_id = res.data[0].USER_ID;
          if (user_pass === Password && user_name === Name) {
            console.log(user_id);
            window.location.assign(
              `http://localhost:3000/MySubbed?name=${Name}&user_id=${user_id}`
            );
          } else {
            alert('Incorrect Credentials');
          }
        }
      })
      .catch((err) => {
        setName('');
        setEmail('');
        setPassword('');
        alert('We are facing problem ! Make sure you are signed up before');
      });
  };

  return (
    <Card border='dark' style={styles}>
      <Card.Header style={{ backgroundColor: '#c8d6e5', width: '100%' }}>
        <HeadingComp />
      </Card.Header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Lottie
          style={{ width: '80%', marginLeft: 70 }}
          animationData={movieanime}
        />
        <Lottie
          style={{ width: '80%', marginLeft: 70 }}
          animationData={music}
        />
      </div>
      <hr />
      <Card.Body style={{ width: '50%' }}>
        <Form.Text className='text-muted'>
          All the Fields are Case Sensitive
        </Form.Text>{' '}
        <br />
        <Form>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={emailChangeHandler}
            type='email'
            value={Email}
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>{' '}
          <br />
          <Form.Label>UserName</Form.Label>
          <Form.Control
            onChange={nameChangeHandler}
            type='name'
            value={Name}
            placeholder='Enter Name'
          />{' '}
          <br />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={Password}
            onChange={passwordChangeHandler}
            placeholder='Password'
          />{' '}
          <br />
          <Button variant='primary' onClick={loginHandler}>
            Login
          </Button>{' '}
          <br /> <br />
          <Button variant='success' onClick={submitHandler}>
            SignUp
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

const styles = {
  width: '50%',
  alignItems: 'center',
  color: 'black',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 30,
  marginBottom: 'auto',
};
export default SignInScreen;
