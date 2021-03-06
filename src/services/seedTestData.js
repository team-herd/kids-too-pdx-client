import {
  postEvent,
  deleteEvent
} from './eventsService';

import {
  signUp,
  deleteOrg
} from './usersService';

let createdUser = null;
let createdEvents = null;

const user = {
  role: 'org',
  username: 'theOrg999',
  password: 'passit',
  name: 'The Org',
  email: 'theorg999@email.com',
  phone: '5551234567',
  address: {
    street: '1223 Main St.',
    city: 'Portland',
    state: 'OR',
    zipcode: '97203'
  }
};

const events = [
  {
    name: 'The Event 1',
    ageMin: 8,
    ageMax: 12,
    category: 'Art',
    liability: true
  },
  {
    name: 'The Event 2',
    ageMin: 9,
    ageMax: 15,
    category: 'Education',
    liability: true
  },
  {
    name: 'The Event 3',
    ageMin: 2,
    ageMax: 10,
    category: 'Art',
    liability: true
  },
  {
    name: 'The Event 4',
    ageMin: 15,
    ageMax: 20,
    category: 'Education',
    liability: true
  },
  {
    name: 'The Event 5',
    ageMin: 8,
    ageMax: 12,
    category: 'Art',
    liability: true
  }
];

const createUser = user => signUp(user)
  .then(userRes => createdUser = userRes)
  .catch(err => err);

const createEvents = events => {
  const { token } = createdUser;
  return Promise.all(events.map(event => {
    event.token = token;
    return postEvent(event);
  }))
    .then(eventRes => createdEvents = eventRes);
};

const deleteEvents = events => {
  const { token } = createdUser;
  return Promise.all(events.map(event => {
    event.token = token;
    return deleteEvent(event);
  }))
    .catch(err => err);
};

export const seedTestData = () => {
  return createUser(user)
    .then(() => createEvents(events))
    .then(() => ({
      createdUser,
      createdEvents
    }))
    .catch(err => err);
};

export const deleteTestData = () => {
  const { user, token } = createdUser;

  return Promise.all([deleteOrg({ ...user, token }), deleteEvents(createdEvents)])
    .catch(err => err);
};
