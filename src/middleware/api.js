export const CALL_API = 'Call API'

const callApi = (endpoint, method='GET', body) => {
  const fullUrl = endpoint
  const headers = {
    'Travis-API-Version': 3,
    'User-Agent': 'API Explorer',
  }
  if (method === 'POST' || method === 'PUT') {
    headers['Content-Type'] = 'application/json'
  }
  return fetch(fullUrl, {
    method,
    headers,
    body,
  }).then(response => response.json())
}

//'next' is redux's store.dispatch() function
export default store => next => action => {
  const actionObj = action[CALL_API]
  if (typeof actionObj === 'undefined') return next(action)
  const {endpoint, types} = actionObj
  const [requestType, successType, failureType] = types

  //tell reducers that a request has been received
  next({
    type: requestType,
  })//type is 'RECEIVE_data_REQUEST'

  //fetch results from your api and dispatch the results to the reducers
  //this is the thunk -> container calls the action creator which returns a thunk that dispatches the action when the fetch promise is fulfilled
  return callApi(endpoint)
    .then(payload => {
      store.dispatch({
        type: successType,
        payload,
      })
    })
    .catch(e => store.dispatch({
      type: failureType,
      error: e.message,
    })
    )
}
