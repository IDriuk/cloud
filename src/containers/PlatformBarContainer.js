import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlatformBar from '../components/PlatformBar/PlatformBar';

const PlatformBarContainer = ({ userName }) => <PlatformBar userName={userName}/>

PlatformBarContainer.propTypes = {
  userName: PropTypes.string
}

const mapStateToProps = state => ({
  userName: state.userName
})

export default connect(
  mapStateToProps
)(PlatformBarContainer)
