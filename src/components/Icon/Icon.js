import React from 'react'

// import Icon from '@material-ui/core/Icon'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class Icon extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      // console.log('icon name=', this.props.icon)
      return (
        // <Icon {...this.props} />{this.props.icon}</Icon>
        <FontAwesomeIcon icon={this.props.icon} {...this.props} />
      )
    }
    return ''
  }
}
