import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { vote } from '../store/actions';
import { color } from '../services/color';
import Mydate from './datestime';
const useStyles = makeStyles({
  root: {
    maxWidth: 675,
    marginLeft: '250px',

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


const Poll = ({ poll, vote }) => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(poll)
  const answers =
    poll.options &&
    poll.options.map(option => (
      <button
        onClick={() => vote(poll._id, { answer: option.option },localStorage.setItem('mytries', localStorage.getItem('mytries')-1 ))}
        className="button"
        key={option._id}>
        {option.option}
      </button>
    ));

  const data = {
    labels: poll.options.map(option => option.option),
    datasets: [
      {
        label: poll.question,
        backgroundColor: poll.options.map(option => color()),
        borderColor: '#323643',
        data: poll.options.map(option => option.votes),
      },
    ],
  };

  return (
    <div>
      
        <Card className={classes.root}>

   
<Mydate/>
il vous reste : { localStorage.getItem('mytries')} vote à faire
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Titre de vote
        </Typography>
        <Typography variant="h5" component="h2">
        {poll.question}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Sujet de vote 
        </Typography>
        <Typography variant="body2" component="p">
        {poll.sujet}
        </Typography>
      </CardContent>
      <CardActions>
      choisissez une réponse: 
      <div className="buttons_center">{answers}</div>

      </CardActions>
    </Card>
      
      <Pie data={data} />
    </div>
  );
};

export default connect(
  store => ({
    poll: store.currentPoll,
  }),
  { vote },
)(Poll);
