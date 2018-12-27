import React from 'react'

// import Icon from '@material-ui/core/Icon'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class Icon extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <FontAwesomeIcon icon={this.props.icon} {...this.props} />
      )
    }
    return ''
  }
}
