import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant={'h4'} align={'center'}>
          {props.book.title}
          <br />
        </Typography>
        <br />
        <Typography align={'center'} variant={'h5'}>
          Authors:
          <br />
        </Typography>
        {props.book.authors !== undefined ? props.book.authors.map(e => <Typography align={'center'}>{e}</Typography>) : ""}
        <br />
        <Typography className={classes.pos} color="textSecondary" align={'center'}>
          {props.book.description}
          <br />
        </Typography>
        <Typography variant="body2" component="p" align={'center'}>
          <img src={props.book.image}></img>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small" href={props.book.link}>View on Google Books</Button>
        <Button variant="contained" color="primary" size="small" onClick={() => props.saveBook(props.book)}>Save this Book</Button>
      </CardActions>
    </Card>
  ); 
}

export default MediaCard