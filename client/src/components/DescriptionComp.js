import React, { useEffect, useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'lottie-react';
import amazon from '../animeFiles/amazon.json';
import netflix from '../animeFiles/netflix.json';
import axios from 'axios';

const DescriptionComp = ({ Name }) => {
  const [Movie, setMovie] = useState('');
  const [Desc, setDesc] = useState(null);
  useEffect(() => {
    setMovie(Name);
    axios
      .post('http://localhost:4000/description', {
        theMovie: Movie,
      })
      .then((res) => {
        setDesc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Name, Movie]);

  return (
    <div>
      {Desc ? (
        Desc.map((des) => (
          <div
            key={des.m_id}
            style={{
              backgroundImage: 'url(' + des.m_image + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
            }}
          >
            <br />
            <Card
              style={{
                width: '50%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0'>
                      <h5>{des.m_name}</h5>
                      <p>Click here for Information.</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>
                        <h6>{des.m_desc}</h6>
                        <br />
                        <h4>Platform:</h4>
                        {des.p_id === 1 ? (
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                            }}
                          >
                            <Lottie
                              style={{
                                width: '80%',
                                marginLeft: 40,
                                backgroundColor: '#dff9fb',
                              }}
                              animationData={amazon}
                            />
                            <div>
                              <h6>
                                Amazon Prime is a subscription membership to
                                Amazon that offers customers premium services
                                for a yearly or monthly fee. Amazon Prime
                                provides discounts on shipping, a free
                                membership to Prime Video, Twitch Prime, Amazon
                                Drive and thirty minutes early access to
                                Lightning Deals for a yearly subscription fee.
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
                                backgroundColor: '#f6e58d',
                              }}
                              animationData={netflix}
                            />
                            <div
                              style={{
                                marginLeft: 10,
                              }}
                            >
                              {' '}
                              <h6>
                                Netflix, Inc. is a streaming entertainment
                                service company, which provides subscription
                                service streaming movies and television episodes
                                over the Internet and sending DVDs by mail. It
                                operates through the following segments:
                                Domestic Streaming, International Streaming and
                                Domestic DVD.
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
            </Card>
          </div>
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default DescriptionComp;
