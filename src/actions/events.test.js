import {
  fetchEvents,
  FETCH_EVENTS,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_FULFILLED,
  FETCH_EVENTS_REJECTED
} from './events';

jest.mock('../services/eventsService');

describe('actions test', () => {
  it('fetch events', () => {
    const action = fetchEvents();
    expect(action).toEqual({
      type: FETCH_EVENTS,
      pendingType: FETCH_EVENTS_PENDING,
      fulfilledType: FETCH_EVENTS_FULFILLED,
      rejectedType: FETCH_EVENTS_REJECTED,
      payload: expect.any(Promise)
    });
  });
});
