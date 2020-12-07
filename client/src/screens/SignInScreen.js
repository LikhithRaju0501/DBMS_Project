import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HeadingComp from '../components/HeadingComp';
import Lottie from 'lottie-react';
import movieanime from '../animeFiles/movieanime.json';
import music from '../animeFiles/music.json';
import ModalComp from '../components/Signup/ModalComp';
import { Link } from 'react-router-dom';
import './CSS/SignUpAbout.css';

const SignInScreen = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ShowModal, setShowModal] = useState(false);
  const [IsLogin, setIsLogin] = useState(true);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
    setName(FirstName + ' ' + LastName);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    setName(FirstName + ' ' + LastName);
  };
  const emailChangeHandler = (event) => {
    setName(FirstName + ' ' + LastName);

    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setName(FirstName + ' ' + LastName);

    setPassword(event.target.value);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const Login = () => {
    axios
      .post('http://localhost:4000/login', {
        theEmail: Email,
        thePassword: Password,
      })
      .then((res) => {
        if (res.data === 'ERROR') {
        } else {
          const user_pass = res.data[0].USER_PASSWORD;
          const user_name = res.data[0].USER_NAME;
          const user_id = res.data[0].USER_ID;
          if (user_pass === Password) {
            console.log(user_name);
            window.location.assign(
              `http://localhost:3000/MySubbed?name=${user_name}&user_id=${user_id}`
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

  const Submit = () => {
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
              `http://localhost:3000/SubPlat?name=${Name}&user_id=${user_id}`
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

  const submitHandler = () => {
    setIsLogin(false);
    setShowModal(true);
  };
  const loginHandler = () => {
    setIsLogin(true);
    setShowModal(true);
  };

  console.log(Name);

  return (
    <div className='signin-container'>
      <Card border='dark' style={styles}>
        <Card.Header style={{ backgroundColor: '#c8d6e5', width: '100%' }}>
          <HeadingComp />
        </Card.Header>
        <div
          style={{
            width: '100%',
            backgroundColor: '#b8e994',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <Lottie
            style={{ width: '60%', marginLeft: 70 }}
            animationData={movieanime}
          />
          <Lottie
            style={{ width: '60%', marginLeft: 70 }}
            animationData={music}
          />
        </div>
        <Card.Body style={{ width: '100%', marginTop: 30 }}>
          <hr />
          <Button
            style={{
              width: '60%',
              marginLeft: '20%',
              fontFamily: 'Righteous',
              fontSize: 20,
            }}
            variant='primary'
            onClick={loginHandler}
          >
            Login
          </Button>{' '}
          <br /> <br />
          {'  '}
          <Button
            style={{
              width: '60%',
              marginLeft: '20%',
              fontFamily: 'Righteous',
              fontSize: 20,
            }}
            variant='success'
            onClick={submitHandler}
          >
            SignUp
          </Button>{' '}
          {'  '} <br />
          <br />
          <Link to='/about' style={{ textDecoration: 'none' }}>
            {' '}
            <Button
              style={{
                width: '60%',
                marginLeft: '20%',
                marginBottom: 100,
                fontFamily: 'Righteous',
                fontSize: 20,
              }}
              variant='warning'
            >
              Know About Us
            </Button>
          </Link>
          <hr />
        </Card.Body>
        <ModalComp
          ShowModal={ShowModal}
          closeModal={closeModal}
          IsLogin={IsLogin}
          firstNameChangeHandler={firstNameChangeHandler}
          lastNameChangeHandler={lastNameChangeHandler}
          emailChangeHandler={emailChangeHandler}
          passwordChangeHandler={passwordChangeHandler}
          Login={Login}
          Submit={Submit}
        />
      </Card>
    </div>
  );
};

const styles = {
  width: '50%',
  height: '100vh',
  alignItems: 'center',
  color: 'black',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 30,
  marginBottom: 'auto',
};

export default SignInScreen;
