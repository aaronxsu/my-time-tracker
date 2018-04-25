import React from 'react';
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid';

import DayCard from './dayCard.js';

const contentContainer = ({dayRecords}) => {
  return (
    <Grid item xs={10}>
      {dayRecords.map((dayRecord, index) => (
        <DayCard key={index} dateId={dayRecord.id} />
      ))}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    dayRecords: state.entries
  }
}

const content = connect(mapStateToProps)(contentContainer);

export default content;
