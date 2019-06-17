import React from 'react';
import './ControlBar.scss';

class ControlBar extends React.Component {

  render() {
    return (
      <div className="control-bar-container m-0 p-4">
        <button className="btn btn-danger btn-lg">Create contact</button>
      </div>
    );
  }
}

export default ControlBar;