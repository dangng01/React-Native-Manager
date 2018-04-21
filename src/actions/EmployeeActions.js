// Email, phone, shift
// 1 action creator handling everything
import {
  EMPLOYEE_UPDATE 
} from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};