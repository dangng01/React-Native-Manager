import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATES = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATES, action) => {
  switch(action.type){
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};