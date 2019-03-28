import {
  createEvent,
  CREATE_EVENT,
  CREATE_EVENT_PENDING,
  CREATE_EVENT_FULFILLED,
  CREATE_EVENT_REJECTED,
  updateContact,
  UPDATE_CONTACT,
  updateEventName,
  UPDATE_EVENT_NAME,
  updateDate,
  UPDATE_DATE
} from './submitEvent';

jest.mock('../services/eventsService');

describe('submit event actions', () => {
  it('creates an event', () => {
    const action = createEvent({
      name: 'The event',
      user: '1234',
      price: 200
    });

    expect(action).toEqual({
      type: CREATE_EVENT,
      pendingType: CREATE_EVENT_PENDING,
      fulfilledType: CREATE_EVENT_FULFILLED,
      rejectedType: CREATE_EVENT_REJECTED,
      payload: expect.any(Promise)
    });
  });

  it('updates contact info', () => {
    const action = updateContact({
      name: 'The event',
      email: 'blah@email.com'
    });

    expect(action).toEqual({
      type: UPDATE_CONTACT,
      payload: {
        name: 'The event',
        email: 'blah@email.com'
      }
    });
  });

  it('updates event name', () => {
    const action = updateEventName('The New Name');

    expect(action).toEqual({
      type: UPDATE_EVENT_NAME,
      payload: 'The New Name'
    });
  });

  it('updates event date', () => {
    const action = updateDate(Date.now());

    expect(action).toEqual({
      type: UPDATE_DATE,
      payload: expect.any(Number)
    });
  });
});
