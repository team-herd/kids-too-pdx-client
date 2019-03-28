import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';
import { Link } from 'react-router-dom';
// import EventDescription from './EventDescription';
// import dollar from '../../../public/assets/dollar-symbol.png';
function Event({ event }) {
  // const { name, date, time, price, ageMin, ageMax, description, category, image } = event;
  // if(event.cost === 'free') {
  //   return <img src={dollar} alt="dollar sign"/>;
  // }
  // console.log(event.location, 'location');
  if(event.ageMin && event.ageMax) {
    event.age = `${event.ageMin}-${event.ageMax}`;
  } else if(event.ageMin) {
    event.age = `${event.ageMin}`;
  } else if(event.ageMax) {
    event.age = `${event.ageMax}`;
  }
  return (
    <>
      <section className={styles.Event}>
        <img src={event.image} alt='event picture' />
        <Link to={`/events/${event._id}`}><h2>{event.name}</h2></Link>
        <p><span>Date:</span>{event.date}</p>
        {event.time && <p><span>Time:</span> {event.time}</p>}
        {event.location && event.location.venue && <p><span>Location:</span>{event.location.venue}</p>}
        {event.price && <p><span>Cost:</span>{event.price}</p>}
        {event.age && <p><span>Age:</span> {event.age}</p>}
        {event.category && <p>{event.category}</p>}
      </section>
    </>
  );
}
Event.propTypes = {
  event: PropTypes.object.isRequired
};
export default Event;
