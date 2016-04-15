import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import twemoji from 'twemoji';

export default class Twemoji extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  _parseTwemoji() {
    const node = ReactDOM.findDOMNode(this);
    twemoji.parse(node);
  }

  componentDidUpdate() {
    this._parseTwemoji();
  }

  componentDidMount() {
    this._parseTwemoji();
  }

  render() {
    const { children, ...other } = this.props;
    return <div {...other}>{children}</div>;
  }
}
