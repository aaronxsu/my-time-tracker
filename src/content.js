import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import DayCard from './dayCard.js';

class Content extends Component {
  render() {
    return(
      <Grid item xs={10}>
        <DayCard />
      </Grid>
    )
  }
}

export default Content;
