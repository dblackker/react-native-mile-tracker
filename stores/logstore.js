import { createStore } from 'redux';

const defaultState = {
  logs: [{
      date: '1/1/1900',
      miles: 7,
    }, {
      date: '1/2/1920',
      miles: 10,
  }],
};

function logstore(state = defaultState, action) {
  switch (action.type) {
  case 'ADD_LOG':
      return Object.assign({}, state, {
        logs: state.logs.concat([ {
          date: action.log.date,
          miles: action.log.miles,
        }]),
      });
  default:
    return state;
  }
}

export default createStore(logstore);
