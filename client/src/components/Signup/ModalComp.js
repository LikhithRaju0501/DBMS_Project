import React from 'react';
import { Modal } from 'rsuite';
import { Button, Form } from 'react-bootstrap';

const ModalComp = ({
  ShowModal,
  closeModal,
  IsLogin,
  firstNameChangeHandler,
  lastNameChangeHandler,
  emailChangeHandler,
  passwordChangeHandler,
  Login,
  Submit,
}) => {
  return (
    <div>
      {' '}
      <Modal
        style={{
          backgroundColor: IsLogin ? '#fad390' : '#b8e994',
          opacity: 0.98,
        }}
        show={ShowModal}
        onHide={closeModal}
      >
        {IsLogin ? (
          <div>
            {' '}
            <Modal.Header>
              <h3>Welcome back!!! Enter your Credentials to Login.</h3>
            </Modal.Header>{' '}
            <hr />
            <Modal.Body
              style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
            >
              {' '}
              <Form>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  onChange={emailChangeHandler}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>{' '}
                <br />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={passwordChangeHandler}
                />{' '}
              </Form>{' '}
              <br />
              <Button onClick={Login}>Login</Button>{' '}
              <Button variant='dark' onClick={closeModal}>
                Close
              </Button>
            </Modal.Body>
          </div>
        ) : (
          <div>
            <Modal.Header>
              <h3>Welcome !!! Enter your Details to Signup.</h3>
            </Modal.Header>{' '}
            <hr />
            <Modal.Body
              style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
            >
              {' '}
              <Form>
                <div style={{ display: 'flex' }}>
                  {' '}
                  <div style={{ marginRight: 7 }}>
                    {' '}
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter First Name'
                      onChange={firstNameChangeHandler}
                    />{' '}
                  </div>
                  <div>
                    {' '}
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter Last Name'
                      onChange={lastNameChangeHandler}
                    />
                  </div>
                </div>{' '}
                <br />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  onChange={emailChangeHandler}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>{' '}
                <br />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={passwordChangeHandler}
                />{' '}
              </Form>{' '}
              <br />
              <Button onClick={Submit}>Signup</Button>{' '}
              <Button variant='dark' onClick={closeModal}>
                Close
              </Button>
            </Modal.Body>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ModalComp;
