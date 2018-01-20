import React, { Component } from 'react'
import {connect} from 'react-redux'

import {
  receiveRepos,
} from '../actions'

class App extends Component {
  componentDidMount () {
    this.props.receiveRepos()
  }

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
  receiveRepos: () => dispatch(receiveRepos()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
