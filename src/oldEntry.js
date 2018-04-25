import React from 'react';
import {connect} from 'react-redux'
import moment from 'moment';

import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';

import { deleteEntry } from './redux/actions';

const styles = {
  card: {
    marginTop: '1em',
    marginRight: '2em',
    marginBottom: '1em',
  },
  deleteIcon: {
    cursor: 'pointer'
  }
}

const oldEntryContent = ({dateId, entry, start, end, duration, onDeleteClick}) => {
  return(
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              {entry.task}
            </Grid>
            <Grid item xs={3}>
              {entry.tag}
            </Grid>
            <Grid item xs={3}>
              {
                [
                  start.format("HH:mm A"),
                  end.format("HH:mm A")
                ].join(' - ')
              }
            </Grid>
            <Grid item xs={2}>
              {duration}
            </Grid>
            <Grid item xs={1}>
              <Icon
                style={styles.deleteIcon}
                onClick={() => onDeleteClick(dateId, entry)}>delete_forever</Icon>
            </Grid>
          </Grid>
        </ CardContent>
      </Card>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    dateId: ownProps.dateId,
    entry: ownProps.entry,
    start: moment(ownProps.entry.start, "HH:mm:ss"),
    end: moment(ownProps.entry.end, "HH:mm:ss"),
    duration: ownProps.getWorkTime(
      moment(ownProps.entry.end, "HH:mm:ss")
      .diff(moment(ownProps.entry.start, "HH:mm:ss")
    ) / 1000 / 60)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: (dateId, entry) => {
      dispatch(deleteEntry(dateId, entry))
    }
  }
}

const oldEntry = connect(mapStateToProps, mapDispatchToProps)(oldEntryContent);


export default oldEntry;
