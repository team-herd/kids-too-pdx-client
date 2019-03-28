import Events from '../components/events/Events';
import { connect } from 'react-redux';
import { getEvents, isLoading } from '../selectors/events';
import {
  fetchEvents,
  updateFilters,
  fetchFilteredEvents
} from '../actions/events';
import { withFetch } from '../components/withFetch';
import store from '../store';

const mapStateToProps = state => ({
  events: getEvents(state),
  loading: isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchEvents());
  },

  onChange({ target }) {
    return dispatch(updateFilters({
      [target.name]: target.value
    }));
  },

  onSubmit(event) {
    event.preventDefault();
    console.log('submitted', store.getState().events.filters);
    return dispatch(fetchFilteredEvents(store.getState().events.filters));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Events));
