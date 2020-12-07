import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Lottie from 'lottie-react';
import Subscribe from '../../animeFiles/Subscribe.json';
import '../../screens/CSS/SignUpAbout.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({
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
}) {
  const [ImgZoom, setImgZoom] = useState({});
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} style={{ width: '500px' }}>
        <div>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={Name}
          />
          <div style={{ marginLeft: '5%' }}>
            {ReleaseYear ? <h6>{ReleaseYear}</h6> : null}
            {Duration ? <h6>{Duration}</h6> : null}
            {Season ? <h6>Season('s): {Season}</h6> : null}
          </div>
          {Rating ? (
            <div style={{ display: 'flex', marginLeft: 15 }}>
              <h4>Rating: {Rating} </h4>
              <Lottie style={{ width: '9%' }} animationData={Subscribe} />{' '}
            </div>
          ) : null}
          <div
            style={ImgZoom}
            onMouseOver={() => setImgZoom({ transform: 'scale(1.25)' })}
            onMouseLeave={() => setImgZoom({})}
          >
            <CardMedia className={classes.media} image={imgLink} title={Name} />
          </div>
          <CardContent>
            {Director ? <h6>Director: {Director}</h6> : null}
            {Writer ? <h6>Writer: {Writer}</h6> : null}
            {Music ? <h6>Music: {Music}</h6> : null}
            {Platform ? <h6>Platform: {Platform}</h6> : null}
            {Lyricist ? <h6>Lyricist: {Lyricist}</h6> : null}
            {Singer ? <h6>Singer: {Singer}</h6> : null}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

/* <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </div>
      <div>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {' '}
              <h3>Description:</h3>
            </Typography>
            <Typography paragraph>{Desc ? <h4> {Desc}</h4> : null}</Typography>
            <Typography paragraph></Typography>
            <Typography paragraph>
              {Cast ? <h6> Cast: {Cast}</h6> : null}
            </Typography>
            {Platform ? (
              Platform === 1 ? (
                <div>
                  <h5> Platform : Amazon </h5>
                  <Lottie style={{ width: '50%' }} animationData={amazon} />
                </div>
              ) : (
                <div>
                  <h5>Platform : Netflix </h5>
                  <Lottie style={{ width: '50%' }} animationData={netflix} />
                </div>
              )
            ) : null}
          </CardContent>
        </Collapse>*/
