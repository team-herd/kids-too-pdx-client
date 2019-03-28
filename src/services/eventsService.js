import { post, get } from './request';

export const postEvent = event => post('/events', event);

export const getEvents = () => get('/events');

export const getFilteredEvents = () => get()
