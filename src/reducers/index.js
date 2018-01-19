import {combineReducers} from 'redux'

import {
  GET_REPOS,
} from '../actions'

const defaultState = {
  repos: [],
}

const repos = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.repos,
      }
    default: return state
  }
}

export default combineReducers({
  repos,
})
