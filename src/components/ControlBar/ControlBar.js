import React from 'react';
import './ControlBar.scss';
import NewContactForm from '../NewContactForm/NewContactForm';

class ControlBar extends React.Component {

  render() {
    return (
      <div className="control-bar-container m-0">
        <NewContactForm />
      </div>
    );
  }
}

export default ControlBar;