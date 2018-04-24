import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import timeTrackerApp from './redux/reducers';
import records from './records.json';

const initialState = {entries: records, entryStatus: {status: false}};
const store = createStore(timeTrackerApp, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
