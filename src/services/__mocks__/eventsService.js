const results = [
  {
    name: 'The event',
    user: '1234',
    description: 'The best event ever!!'
  },

  {
    name: 'The other event',
    user: '12345',
    description: 'An okay event...'
  }
];

export const postEvent = event => Promise.resolve(event);

export const getEvents = () => Promise.resolve(results);

export const getFilteredEvents = filters => {
  let route = '/events/query/q?';

  Object.keys(filters).every(key => route += `${key}=${filters[key]}&`);

  return Promise.resolve(route);
};

export const getEvent = () => Promise.resolve(results[0]);
