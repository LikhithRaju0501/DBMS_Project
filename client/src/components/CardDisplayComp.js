import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Paper from '@material-ui/core/Paper';

// const styles = {
//   gridContainer: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//   },
//   deletedStyle: {
//     width: '40%',
//     left: '30%',
//     marginLeft: 300,
//     marginBottom: 20,
//   },
// };

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

// const styles = {
//   width: '50%',
//   alignItems: 'center',
//   color: 'black',
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   marginBottom: 30,
// };
export default CardDisplayComp;

/* <Paper elevation={3}>
<div style={styles.gridContainer}>
  <div style={{ margin: 20, wordWrap: 'break-word', width: '200px' }}>
    <h5 style={{ marginBottom: 20 }}>{Name}</h5>
    {Movie ? <h6>Movie: {Movie}</h6> : null}
    <h6>Rating: {Rating}</h6>
    {Platform ? <h6>Platform: {Platform}</h6> : null}
    <h6>Released Date: {ReleaseDate}</h6>
  </div>
  <div style={{ marginLeft: 30, marginRight: 0, width: '100%' }}>
    <img
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0ezFehO_TocUrT0GWjSiY3kI20JE5lT-qVQ&usqp=CAU'
      alt='DDLJ'
      width='100%'
      height={200}
    />
  </div>
</div>
</Paper> */
