import { createStore } from 'redux';

// 1. Initial State
const initialState = {
  name: '',
  email: ''
};

// 2. Reducer
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

// 3. Create Store
const store = createStore(userReducer);

export default store;
