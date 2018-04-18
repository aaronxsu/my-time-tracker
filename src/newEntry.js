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

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.now = moment().format("HH:mm");
    this.state = {
      id: uuidv4(),
      task: '',
      tag: '',
      start: this.now,
      end: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleConfirm() {
    this.props.onAddEntry(this.props.dateId, this.state);
  }

  handleCancel() {

  }

  render() {
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
                  onChange={this.handleChange} />
              </Grid>
              <Grid item xs={3}>
                <Input
                  placeholder="Tag"
                  inputProps={{'aria-label': 'Tag',}}
                  name="tag"
                  onChange={this.handleChange} />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="time"
                  defaultValue={this.now}
                  InputLabelProps={{shrink: true,}}
                  inputProps={{step: 900,}}
                  name="start"
                  onChange={this.handleChange} />
                &nbsp;&nbsp;to&nbsp;&nbsp;
                <TextField
                  type="time"
                  InputLabelProps={{shrink: true,}}
                  inputProps={{step: 900,}}
                  name="end"
                  onChange={this.handleChange} />
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
                  onClick={this.handleConfirm}>
                  <Icon>check</Icon>
                </Button>
                <Button
                  variant="fab"
                  mini
                  color="primary"
                  aria-label="discard"
                  onClick={this.handleCancel}>
                  <Icon>close</Icon>
                </Button>
              </Grid>
            </Grid>
          </ CardContent>
        </Card>
      </div>
    )
  }
}

export default NewEntry;
