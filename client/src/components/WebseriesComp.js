import React, { useEffect, useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'lottie-react';
import amazon from './amazon.json';
import netflix from './netflix.json';
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
                        <p>Click here for Information.</p>
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
                          <hr />
                          <h4>Platform:</h4>
                          {des.p_id === 1 ? (
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                              }}
                            >
                              <Lottie
                                style={{ width: '60%', marginLeft: 40 }}
                                animationData={amazon}
                              />
                              <div>
                                <h6>
                                  Amazon Prime is a subscription membership to
                                  Amazon that offers customers premium services
                                  for a yearly or monthly fee. Amazon Prime
                                  provides discounts on shipping, a free
                                  membership to Prime Video, Twitch Prime,
                                  Amazon Drive and thirty minutes early access
                                  to Lightning Deals for a yearly subscription
                                  fee.
                                </h6>{' '}
                                <br />
                                <p>Montly Plan: Rs 129</p>
                                <p>Yearly Plan:Rs 999</p>
                              </div>
                            </div>
                          ) : (
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                              }}
                            >
                              <Lottie
                                style={{
                                  width: '100%',
                                  height: '90%',
                                }}
                                animationData={netflix}
                              />
                              <div>
                                {' '}
                                <h6>
                                  Netflix, Inc. is a streaming entertainment
                                  service company, which provides subscription
                                  service streaming movies and television
                                  episodes over the Internet and sending DVDs by
                                  mail. It operates through the following
                                  segments: Domestic Streaming, International
                                  Streaming and Domestic DVD.
                                </h6>{' '}
                                <br />
                                <p>Montly Plan: Rs199 to Rs999</p>
                                <p>Yearly Plan: Rs2388 to Rs9588</p>
                              </div>
                            </div>
                          )}
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
