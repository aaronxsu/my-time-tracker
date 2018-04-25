import React from 'react';
import {connect} from 'react-redux'

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddIcon from '@material-ui/icons/Add';

import moment from 'moment';
import uuidv4 from 'uuid/v4';

import NewEntry from './newEntry.js';
import OldEntry from './oldEntry.js';
import { pendingEntry } from './redux/actions';

const styles = {
  marginTop: '1em',
  marginRight: '2em',
};

const dayCardContent = ({entries, totalTime, onAddEntryClick}) => {
  return(
    <div>
      <Grid container spacing={8} style={styles}>
        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={11}>
              <Typography gutterBottom variant="title">
                {entries.date}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="fab"
                mini color="primary"
                aria-label="add"
                onClick={() => onAddEntryClick(true, entries.id)}>
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
            { entries.isPending && <NewEntry key={uuidv4()} dateId={entries.id} /> }
            { entries.entries.map((entry, idx) => {
                return <OldEntry key={idx} entry={entry} getWorkTime={getWorkTime} dateId={entries.id} />
              })
            }
        </Grid>
        <Grid item xs={10}>
        </Grid>
        <Grid item xs={2}>
          Total: {totalTime}
        </Grid>
      </Grid>
    </div>
  )
}

const getTodayString = () => {
  return ['Today', moment().format('MM/DD/YYYY'), moment().format('dddd')].join(', ');
}

const getDayById = (state, dateId) => {
  return state.entries.filter(day => day.id === dateId)[0];
}

const getWorkTime = function(mins) {
  if(mins > 60 ) {
    let hours = Math.floor(mins/60) ;
    let minutes = Math.round(mins - hours * 60);
    return `${hours} hr ${minutes} min`
  }
  return `${Math.round(mins)} min`;
}

const mapStateToProps = (state, ownProps) => {
  return {
    entries: getDayById(state, ownProps.dateId),
    totalTime: getWorkTime(getDayById(state, ownProps.dateId).entries.reduce((acc, e) => {
      return acc + moment(e.end, "HH:mm:ss").diff(moment(e.start, "HH:mm:ss"));
    }, 0) / 1000 / 60)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddEntryClick:  (status, dateId) => {
      dispatch(pendingEntry(status, dateId));
    }
  }
}

const dayCard = connect(mapStateToProps, mapDispatchToProps)(dayCardContent);

export default dayCard;
