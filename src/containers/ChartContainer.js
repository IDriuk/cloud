import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Chart from '../components/Chart/Chart';

const ChartContainer = ({ data }) => (
  <Chart data={data}/>
)

ChartContainer.propTypes = {
  data: PropTypes.object
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect(
  mapStateToProps
)(ChartContainer)
