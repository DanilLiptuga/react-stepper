import React, { Component, PropTypes } from 'react';

export default class Step extends Component {
  constructor() {
    super();
    this.getStyle = this.getStyle.bind(this);
  }

  getStyle() {
    const { width, padding } = this.props;

    return {
      step: {
        width: `${width}%`,
        display: 'table-cell',
        position: 'relative',
        paddingTop: padding,
      },
      title: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: '300',
        textAlign: 'center',
        color: '#757575',
      },
      completedTitle: {
        color: '#FFF',
      }
      leftBar: {
        position: 'absolute';
        top: 32,
        height: 1,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#757575',
        left: 0,
        right: '50%',
        marginRight: 8,
      },
      rightBar: {
        position: 'absolute';
        top: 32,
        height: 1,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#757575',
        right: 0,
        left: '50%',
        marginLeft: 8,
      },
      completedBar: {
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#FFF',
      },
      circle: {
        width: 16;
        height: 16;
        margin: 0;
        backgroundColor: '#757575';
        borderRadius: '50%';
        textAlign: 'center';
        padding: 1;
        fontSize: 10;
        color: '#424242';
        display: 'block';
      },
      active: {
        backgroundColor: '#FFF';
      },
    };
  }
}

Step.defaultProps = {
  padding: 24,
};

Step.propTypes = {
  width: PropTypes.number,
  padding: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.boolean,
  completed: PropTypes.boolean,
  first: PropTypes.boolean,
  last: PropTypes.boolean,
};