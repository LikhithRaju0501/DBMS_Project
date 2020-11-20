import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import queryString from 'query-string';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubbedPlatMovies from './SubbedComps/SubbedPlatMovies';

const SubbedMoviePlatform = ({ PlatID, location }) => {
  return (
    <div>
      <Accordion defaultActiveKey='0' style={{ display: 'flex' }}>
        <Card style={{ flex: 1 }}>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <div>Movies</div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0' style={{ width: '100%' }}>
            <SubbedPlatMovies PlatID={PlatID} />
          </Accordion.Collapse>
        </Card>
        <Card style={{ flex: 1 }}>
          <Accordion.Toggle as={Card.Header} eventKey='1'>
            <div>Web Series</div>
          </Accordion.Toggle>
          <Accordion.Collapse
            eventKey='1'
            style={{
              margin: 'auto',
            }}
          >
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default SubbedMoviePlatform;