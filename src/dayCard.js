import React from 'react';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddIcon from '@material-ui/icons/Add';

import moment from 'moment';

import NewEntry from './newEntry.js';
import OldEntry from './oldEntry.js';

const styles = {
  marginTop: '1em',
  marginRight: '2em',
};

class DayCard extends React.Component {
  constructor(props) {
    super(props);
    this.today = [
      'Today',
      moment().format('MM/DD/YYYY'),
      moment().format('dddd')
    ].join(', ');

    this.totalTime = this.getWorkTime(this.props.entries.entries.reduce((acc, e) => {
      return acc + moment(e.end, "HH:mm:ss").diff(moment(e.start, "HH:mm:ss"));
    }, 0) / 1000 / 60);

    this.isPending = false;
    this.onCreateEntry = this.onCreateEntry.bind(this);
  }

  getWorkTime(mins) {
    if(mins > 60 ) {
      let hours = Math.floor(mins/60) ;
      let minutes = Math.round(mins - hours * 60);
      return `${hours} hr ${minutes} min`
    }
    return `${Math.round(mins)} min`;
  }

  onCreateEntry() {
    this.isPending = true;
  }

  // createNew(){
  //   if (this.) {
  //     return
  //   }
  //   return
  // }

  render() {
    return(
      <div>
        <Grid container spacing={8} style={styles}>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={11}>
                <Typography gutterBottom variant="title">
                  {this.props.entries.date}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Button variant="fab" mini color="primary" aria-label="add" onClick={this.onCreateEntry}>
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
              {
                this.isPending &&
                  <NewEntry dateId={this.props.dateId} onAddEntry={this.props.onAddEntry}  />
              }
              {
                this.props.entries.entries.map((entry) => {
                  return <OldEntry key={entry.id} entry={entry} getWorkTime={this.getWorkTime} />
                })
              }
          </Grid>
          <Grid item xs={10}>
          </Grid>
          <Grid item xs={2}>
            Total: {this.totalTime}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DayCard;
