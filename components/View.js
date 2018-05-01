import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { View as RNView, ViewPropTypes } from 'react-native'

import { connectStyle } from '@shoutem/theme'
import { connectAnimation } from '@shoutem/animation'

class View extends Component {
  render() {
    const style = { ...this.props.style }
    let gradient = null

    return (
      <RNView {...this.props} style={style}>
        {gradient}
        {this.props.children}
      </RNView>
    )
  }
}

View.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.object
}

const AnimatedView = connectAnimation(View)
const StyledView = connectStyle('shoutem.ui.View')(AnimatedView)

export { StyledView as View }
