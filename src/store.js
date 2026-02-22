import { createStore } from 'redux';

const initialState = {
  name: '',
  email: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const store = createStore(userReducer);

export default store;
