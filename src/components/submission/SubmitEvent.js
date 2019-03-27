import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitEvent.css';

function SubmitEvent({
  contact, name, date, time, location, price, minAge, maxAge, category, description,
  contactNameChange, emailChange, phoneChange, nameChange, dateChange, timeChange, priceChange,
  rrSelect, minAgeChange, maxAgeChange, onSelectCategory, descriptionChange
}) {
  return (
    <>
      <form className={styles.Form}>
        <fieldset>
          <legend>Contact Info</legend>

          <label name="name">Name:
            <input type="text" value={contact.name} onChange={contactNameChange} required />
          </label>

          <label name="email">Email:
            <input type="email" value={contact.email} onChange={emailChange} required />
          </label>

          <label>Phone #:
            <input type="tel" value={contact.phone} onChange={phoneChange} required />
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Info</legend>

          <label>Name:
            <input type="text" value={name} onChange={nameChange} required />
          </label>

          <label>Date:
            <input type="date" value={date} onChange={dateChange} required />
          </label>

          <label>Time:
            <input type="time" value={time} onChange={timeChange} required />
          </label>

          <label>Location:
            <input type="text" placeholder="Venue" value={location.venue} required />
            <input type="text" placeholder="Address" value={location.address} required />
            <input type="text" placeholder="City" value={location.city} />
            <input type="state" placeholder="State" value={location.state} />
            <input type="zipcode" placeholder="Zipcode" value={location.zipcode} />
          </label>

          <label>Price:
            <input type="number" placeholder="$" value={price} onChange={priceChange} required />
          </label>

          <label>Reduced Rate Available:
            <button type="radio" onSelect={rrSelect}></button>
          </label>

          <label>Age Range:
            <input type="number" placeholder="Min Age" value={minAge} onChange={minAgeChange} required />
            <input type="number" placeholder="Max Age" value={maxAge} onChange={maxAgeChange} required />
          </label>

          <label>Category:
            <select value={category} onSelect={onSelectCategory} required>
              <option value="DEFAULT" hidden>Category</option>
              <option value="sports">Sports</option>
              <option value="arts">Art</option>
              <option value="music">Music</option>
              <option value="performance">Performance</option>
              <option value="education">Educational</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </label>

          <label>Description
            <textarea value={description} onChange={descriptionChange} required />
          </label>

        </fieldset>
        <button>SUBMIT</button>
      </form>
    </>
  );
}

SubmitEvent.propTypes = {
  contact: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.date,
  time: PropTypes.string,
  location: PropTypes.object,
  price: PropTypes.string,
  minAge: PropTypes.number,
  maxAge: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  contactNameChange: PropTypes.func.isRequired,
  emailChange: PropTypes.func.isRequired,
  phoneChange: PropTypes.func.isRequired,
  nameChange: PropTypes.func.isRequired,
  dateChange: PropTypes.func.isRequired,
  timeChange: PropTypes.func.isRequired,
  priceChange: PropTypes.func.isRequired,
  rrSelect: PropTypes.func.isRequired,
  minAgeChange: PropTypes.func.isRequired,
  maxAgeChange: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  descriptionChange: PropTypes.func.isRequired
};

export default SubmitEvent;
