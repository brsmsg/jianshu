import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../Common/header/store';

export default combineReducers({
  header: headerReducer
})