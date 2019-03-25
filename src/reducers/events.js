import { FETCH_EVENTS } from '../actions/events';

const initialState = {
  events: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
}
