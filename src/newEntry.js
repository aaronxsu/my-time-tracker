import React from 'react';
import {connect} from 'react-redux'
import moment from 'moment';
import uuidv4 from 'uuid/v4';

import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

import { pendingEntry, addEntry } from './redux/actions'

const styles = {
  card: {
    marginTop: '1em',
    marginRight: '2em',
    marginBottom: '1em',
  }
}

const now = moment().format('HH:mm');

const entryContent = {
  start: now,
  key: uuidv4()
}

const handleChange = (key, val) => {
  entryContent[key] = val;
}

const getEntryContent = () => {
  entryContent.start += ':00';
  if(!entryContent.end) {
    entryContent.end = moment().format('HH:mm:ss');
  } else {
    entryContent.end += ':00';
  }
  return entryContent;
}

const newEntryContent = ({dateId, onDiscardClick, onAddEntryClick}) => {
  return(
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <Input
                placeholder="Task"
                inputProps={{'aria-label': 'Task',}}
                name="task"
                onChange={(e) => handleChange('task', e.target.value)} />
            </Grid>
            <Grid item xs={3}>
              <Input
                placeholder="Tag"
                inputProps={{'aria-label': 'Tag',}}
                name="tag"
                onChange={(e) => handleChange('tag', e.target.value)} />
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="time"
                defaultValue={now}
                InputLabelProps={{shrink: true,}}
                inputProps={{step: 900,}}
                name="start"
                onChange={(e) => handleChange('start', e.target.value)} />
              &nbsp;&nbsp;to&nbsp;&nbsp;
              <TextField
                type="time"
                InputLabelProps={{shrink: true,}}
                inputProps={{step: 900,}}
                name="end"
                onChange={(e) => handleChange('end', e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              duration
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="fab"
                mini
                color="primary"
                aria-label="confirm"
                onClick={() => onAddEntryClick(getEntryContent(), dateId, false)}>
                <Icon>check</Icon>
              </Button>
              <Button
                variant="fab"
                mini
                color="primary"
                aria-label="discard"
                onClick={() => onDiscardClick(false, dateId)}>
                <Icon>close</Icon>
              </Button>
            </Grid>
          </Grid>
        </ CardContent>
      </Card>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onDiscardClick: (status, dateId) => {
      dispatch(pendingEntry(status, dateId));
    },
    onAddEntryClick: (entry, dateId, status) => {
      dispatch(addEntry(dateId, entry, status));
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dateId: ownProps.dateId
  }
}

const newEntry = connect(mapDispatchToProps, mapDispatchToProps)(newEntryContent)

export default newEntry;
