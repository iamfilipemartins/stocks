import { combineReducers } from 'redux';
import { appReducer } from '../redux';
import { companyReducer } from '../features/company/redux';

const reducer = combineReducers({
  appReducer,
  companyReducer,
});

export default reducer;
