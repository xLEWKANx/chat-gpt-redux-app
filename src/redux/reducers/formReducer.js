import { SET_FORM_DATA } from '../actions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

const formReducer = (state = initialState, action) => {
  if (action.type === SET_FORM_DATA) {
    return {
      ...state,
      ...action.payload
    }
  } else {
    return state;
  }
};

export default formReducer;
