import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

//we wire together all the different reducers
//inside of our application
//not only reducers but also reducers that also reducers
//that are used by third  party modules that we
//want to install as well

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});

//has to be assigne to some keys
