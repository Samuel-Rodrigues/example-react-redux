import { combineReducers } from 'redux'

import course from './Course'
import count from './Count'

export default combineReducers({
  course,
  count
})