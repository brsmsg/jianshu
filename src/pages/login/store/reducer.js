import { fromJS } from 'immutable';
import { actionTypes } from '.';

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('login', action.value);
    case actionTypes.LOGOUT:
      return state.set('login', action.value);
  }
  return state;
}