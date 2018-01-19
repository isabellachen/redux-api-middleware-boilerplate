import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
// import store from './configureStore'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
