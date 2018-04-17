import React, { Component } from 'react';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AddIcon from '@material-ui/icons/Add';

import moment from 'moment'

import NewEntry from './newEntry.js'
import OldEntry from './oldEntry.js'

const styles = {
  marginTop: '1em',
  marginRight: '2em',
};

let currentDate = moment().format('MM/DD/YYYY');
let currentDay = moment().format('dddd')
let today = ['Today', currentDate, currentDay].join(', ');

class DayCard extends Component {
  render() {
    return(
      <div>
        <Grid container spacing={8} style={styles}>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={11}>
                <Typography gutterBottom variant="title">
                  {today}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Button variant="fab" mini color="primary" aria-label="add">
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
            <NewEntry />
            <OldEntry />
          </Grid>
          <Grid item xs={10}>
          </Grid>
          <Grid item xs={2}>
            Total:
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DayCard;
