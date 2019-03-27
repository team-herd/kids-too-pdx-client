import { combineReducers } from 'redux';
import events from './events';
import submit from './SubmitEvent';

export default combineReducers({
  events,
  submit
});
