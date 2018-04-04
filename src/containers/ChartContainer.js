import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Chart from '../components/Chart/Chart';

const ChartContainer = ({ coordinates}) => <Chart coordinates={coordinates}/>

ChartContainer.propTypes = {
  coordinates: PropTypes.array
}

const mapStateToProps = state => ({
  coordinates: state.coordinates
})

export default connect(
  mapStateToProps
)(ChartContainer)
