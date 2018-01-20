import {combineReducers} from 'redux'

import * as actions from '../actions'

const defaultState = {
  repos: [],
  fetching: false,
  fetched: false,
  error: null,
}

const repos = (state = defaultState, action) => {
  switch (action.type) {
    case actions.RECEIVE_REPOS_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case actions.RECEIVE_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload.repositories,
        fetching: false,
        fetched: true,
      }
    default: return state
  }
}

export default combineReducers({
  repos,
})
