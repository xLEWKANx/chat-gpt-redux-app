import { SET_FORM_DATA } from '../actions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    default:
      return state;
  }
};

export default formReducer;
