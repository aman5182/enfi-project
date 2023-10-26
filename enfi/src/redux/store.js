// redux/store.js
import { createStore } from 'redux';

const initialState = {
  sidebarShow: true,
  address: null,       // Initialize with an empty string
  enfiBalance: null, // Initialize with null or an appropriate default value
  userData: true, // Initialize with null or an appropriate default value
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest };
      

    case 'SET_ADDRESS':
 return { ...state, address: rest.address };


      case 'SET_USER_DATA':
 return { ...state, userData: rest.userData };
          
       
    
      case 'SET_ENFIBALANCE':
 return { ...state, enfiBalance: rest.enfiBalance };
    default:
      return state;

  }
};

const store = createStore(changeState);

// Log the Redux store state
// console.log('Initial Redux State:', store.getState());



export default store;

