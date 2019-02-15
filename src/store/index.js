import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import reducers from './reducers';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...reducers
});

export default rootReducer;
