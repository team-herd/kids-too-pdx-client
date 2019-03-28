import reducer from './SubmitEvent';

jest.mock('../services/eventsService');

describe('Submit Event reducers', () => {
  const state = {
    contact: {},
    name: '',
    date: Date.now(),
    time: '',
    location: {},
    price: '',
    reducedRate: true,
    minAge: 0,
    maxAge: 0,
    category: '',
    description: ''
  };


  it('creates event', () => {
    const action = {
      type: 'CREATE_EVENT'
    };

    expect(reducer(state, action)).toEqual({
      ...state
    });
  });
});
