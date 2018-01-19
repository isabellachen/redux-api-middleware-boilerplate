import React, { Component } from 'react'
import {connect} from 'react-redux'

import {
  getRepos,
} from '../actions'

class App extends Component {
  render () {
    return (
      <div className="App">
        App Component
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos ? state.repos : [],
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRepos: () => dispatch(getRepos()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
