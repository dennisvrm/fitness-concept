import * as Redux from 'redux';
import authentication from './authentication';
import register from './register';
import friends from './friends';
import workouts from './workouts';

export default Redux.combineReducers({
  authentication,
  register,
  friends,
  workouts,
});
