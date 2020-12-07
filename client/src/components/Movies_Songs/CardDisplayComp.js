import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardDisplayComp = ({
  PlatID,
  Name,
  Rating,
  Director,
  Writer,
  ReleaseYear,
  Duration,
  imgLink,
  Music,
  Platform,
  Lyricist,
  Singer,
  Season,
  STYLES,
}) => {
  const [StylingImg, setStylingImg] = useState({
    width: '97%',
    height: 180,
  });
  return (
    <div style={{}}>
      <Card
        border='dark'
        style={
          STYLES
            ? STYLES
            : {
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50vh',
                height: '30%',
                boxShadow: '5px 5px  5px 5px #dfe4ea',
              }
        }
      >
        <div>
          <img
            onMouseOver={() =>
              setStylingImg({
                width: '90%',
                height: 170,
                transform: 'scale(1.1)',
              })
            }
            onMouseLeave={() =>
              setStylingImg({
                width: '97%',
                height: 180,
              })
            }
            src={imgLink}
            alt='DDLJ'
            style={StylingImg}
          />
        </div>
        <hr />
        <Card.Body>
          <div>
            <h5 style={{ textAlign: 'center' }}>{Name}</h5>
            {Rating ? <h6>Rating: {Rating}/10</h6> : null}
            {Director ? <h6>Director: {Director}</h6> : null}
            {Singer ? <h6>Singer: {Singer} </h6> : null}
            {Lyricist ? <h6>Lyricist: {Lyricist} </h6> : null}
            {Music ? <h6>Music: {Music} </h6> : null}
            {Writer ? <h6>Writer: {Writer}</h6> : null}
            {ReleaseYear ? <h6>ReleaseYear: {ReleaseYear}</h6> : null}
            {Duration ? <h6>Duration: {Duration}</h6> : null}
            {Season ? <h6>Seasons: {Season} </h6> : null}
            {Platform ? <h6>Platform: {Platform} </h6> : <h6>null</h6>}
          </div>
        </Card.Body>
      </Card>

      <br />
    </div>
  );
};

export default CardDisplayComp;
