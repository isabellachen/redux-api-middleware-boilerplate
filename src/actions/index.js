import fetch from 'cross-fetch'
import {CALL_API} from '../middleware/api'

export const RECEIVE_REPOS_REQUEST = 'RECEIVE_REPOS_REQUEST'
export const RECEIVE_REPOS_SUCCESS = 'RECEIVE_REPOS_SUCCESS'
export const RECEIVE_REPOS_FAILURE = 'RECEIVE_REPOS_FAILURE'

export const receiveRepos = () => ({
  [CALL_API] : {
    types: [RECEIVE_REPOS_REQUEST, RECEIVE_REPOS_SUCCESS, RECEIVE_REPOS_FAILURE],
    endpoint:'https://api.travis-ci.org/owner/isabellachen/repos',
  },
})
