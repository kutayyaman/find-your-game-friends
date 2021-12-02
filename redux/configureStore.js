import {createStore} from 'redux';
import authReducer from './authReducer';

  const configureStore = () => {
      return createStore(authReducer);
  } 

  export default configureStore;