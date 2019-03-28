import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';
import { Link } from 'react-router-dom';

// import dollar from '../../../public/assets/dollar-symbol.png';
function Event({ event }) {
  // const { name, date, time, price, ageMin, ageMax, description, category, image } = event;
  // if(event.cost === 'free') {
  //   return <img src={dollar} alt="dollar sign"/>;
  // }
  // console.log(event.location, 'location');

  return (

    <>
      <section className={styles.Event}>
        <img src={event.image} alt='event picture' />
        <Link to={`/events/${event._id}`}><h2>{event.name}</h2></Link>
        <p><span>Date:</span>{event.date}</p>
        <p><span>Time: @</span> {event.time}</p>
        {event.location && <p><span>Location:</span>{event.location.venue}</p>}
        <p><span>Cost:</span>{event.price}</p>
        <p><span>Age:</span>{event.ageMin}-{event.ageMax}</p>
        <p>{event.category}</p>
        <p>{event.description}</p>
      </section>
    </>
  );
}
Event.propTypes = {
  event: PropTypes.object.isRequired
};
export default Event;
