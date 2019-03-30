import { post, get } from './request';
import { stringify } from 'querystring';

export const postEvent = event => post('/events', event);
export const getEvents = () => get('/events');
export const getEvent = id => get(`/events/${id}`);

// can use querystring here to stringify your object
// also, instead of every you should have used forEach
export const getFilteredEvents = filters => get(`/events/query?${stringify(filters)}`)
