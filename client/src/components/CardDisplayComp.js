import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardDisplayComp = ({
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
}) => {
  return (
    <div>
      <Card
        border='dark'
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '25%',
          height: '30%',
        }}
      >
        <div>
          <img src={imgLink} alt='DDLJ' width='100%' height={180} />
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
      </Card>{' '}
      <br />
    </div>
  );
};

export default CardDisplayComp;
