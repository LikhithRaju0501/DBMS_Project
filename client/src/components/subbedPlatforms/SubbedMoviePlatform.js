import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubbedPlatMovies from './SubbedComps/SubbedPlatMovies';
import SubbedPlatWebseries from './SubbedComps/SubbedPlatWebseries';
import '../../screens/CSS/SignUpAbout.css';

const SubbedMoviePlatform = ({ PlatID, location }) => {
  return (
    <div className='MovieDesc-container'>
      <Accordion
        defaultActiveKey='0'
        style={{
          display: 'flex',
          width: '95%',
          margin: 'auto',
        }}
      >
        <Card style={{ flex: 1 }}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey='0'
            style={{ backgroundColor: '#2c3e50', color: 'black' }}
          >
            <div style={{ marginLeft: '50%', color: 'white' }}>Movies</div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0' style={{ width: '100%' }}>
            <SubbedPlatMovies PlatID={PlatID} />
          </Accordion.Collapse>
        </Card>
        <Card style={{ flex: 1 }}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey='1'
            style={{ backgroundColor: '#2c3e50' }}
          >
            <div style={{ marginLeft: '50%', color: 'white' }}>Web Series</div>
          </Accordion.Toggle>
          <Accordion.Collapse
            eventKey='1'
            style={{
              margin: 'auto',
              width: '100%',
            }}
          >
            <SubbedPlatWebseries PlatID={PlatID} />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default SubbedMoviePlatform;
