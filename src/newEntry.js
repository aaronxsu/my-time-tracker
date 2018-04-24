import React from 'react';

import moment from 'moment';
import uuidv4 from 'uuid/v4';

import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

const styles = {
  card: {
    marginTop: '1em',
    marginRight: '2em',
    marginBottom: '1em',
  }
}

const now = moment().format("HH:mm");

const newEntry = ({}) => {
  return(
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <Input
                placeholder="Task"
                inputProps={{'aria-label': 'Task',}}
                name="task"/>
            </Grid>
            <Grid item xs={3}>
              <Input
                placeholder="Tag"
                inputProps={{'aria-label': 'Tag',}}
                name="tag"/>
            </Grid>
            <Grid item xs={3}>
              <TextField
                type="time"
                defaultValue={now}
                InputLabelProps={{shrink: true,}}
                inputProps={{step: 900,}}
                name="start"/>
              &nbsp;&nbsp;to&nbsp;&nbsp;
              <TextField
                type="time"
                InputLabelProps={{shrink: true,}}
                inputProps={{step: 900,}}
                name="end"/>
            </Grid>
            <Grid item xs={2}>
              duration
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="fab"
                mini
                color="primary"
                aria-label="confirm">
                <Icon>check</Icon>
              </Button>
              <Button
                variant="fab"
                mini
                color="primary"
                aria-label="discard">
                <Icon>close</Icon>
              </Button>
            </Grid>
          </Grid>
        </ CardContent>
      </Card>
    </div>
  )
}

class NewEntry extends React.Component {
  constructor(props) {
    super(props);

  }

}

export default NewEntry;
