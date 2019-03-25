import React from 'react';
import PropTypes from 'prop-types';
import AdminEvent from './AdminEvent';

function EventsList({ events }) {
  const listOfEvents = events.map(event => {
    return <li key={event.id}><AdminEvent /></li>;
  });

  return (
    <>
      <ul>{listOfEvents}</ul>
    </>
  );
}
EventsList.propTypes = {
  events: PropTypes.array.isRequired
}
export default EventsList;
