import React, { useEffect, useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const WebseriesComp = ({ Name }) => {
  const [Movie, setMovie] = useState('');
  const [Desc, setDesc] = useState(null);
  useEffect(() => {
    setMovie(Name);
    axios
      .post('http://localhost:4000/descriptionSeries', {
        theMovie: Movie,
      })
      .then((res) => {
        console.log(res.data);
        setDesc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Name, Movie]);
  return (
    <div>
      {' '}
      <div style={styles.header}>
        <h1>{Movie}</h1>
      </div>
      <div style={styles.gridContainer}>
        <div
          style={{
            marginLeft: 50,
            marginTop: 30,
            wordWrap: 'break-word',
            width: '600px',
          }}
        >
          <h3>Description:</h3>
          {Desc
            ? Desc.map((des) => (
                <div key={des.s_id}>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey='0'>
                        <h5>{des.s_name}</h5>
                        <p>Click here for Inforamtion.</p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                          <h6>{des.s_desc}</h6> <hr />
                          <br />
                          <img
                            src={des.s_image}
                            width='50%'
                            height='60%'
                            alt=''
                          />{' '}
                          <hr />
                          <h6>{des.s_cast}</h6>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    marginLeft: 50,
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
};
export default WebseriesComp;
