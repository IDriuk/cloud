import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import App from '../components/App/App';

const AppContainer = ({ data }) => (
  <App data={data}/>
)

AppContainer.propTypes = {
  data: PropTypes.string
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect(
  mapStateToProps
)(AppContainer)
