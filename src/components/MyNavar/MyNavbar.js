import React from 'react';
import './MyNavbar.scss';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import firebase from 'firebase';
import authRequests from '../../helpers/data/authRequests';
import logo from '../../images/logo.png';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
  };

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
    }).catch(err => console.error('there was an error with auth', err));
  }

  toggle = this.toggle.bind(this);

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;

    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand">
          <img className="navbar-brand" src={logo} alt="Logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {isAuthed
                  ?
                  <div className="profile-holder nav-item">
                    <Dropdown isOpen={this.state.dropdownOpen} size='lg' direction="left" toggle={this.toggle}>
                      <DropdownToggle tag="a" href='#' className="nav-link text-primary" caret>
                        Profile
        </DropdownToggle>
                      <DropdownMenu right className="text-center">
                        <DropdownItem disabled>
                          <img className="user-photo shadow bg-light pt-2 ml-0" src={firebase.auth().currentUser.photoURL} alt="user" />
                        </DropdownItem>
                        <DropdownItem disabled>
                          <p className="welcome mt-2">Hi, <span><b>{firebase.auth().currentUser.displayName}</b></span></p>
                        </DropdownItem>
                        <DropdownItem disabled>
                          <p className="welcome mt-2 text-center">{firebase.auth().currentUser.email}</p>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <a className='nav-link text-center text-danger' href='#http://localhost:3000/' onClick={logoutClickEvent}>Logout</a>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                  </div>
                  :
                  <li>
                    <button className="btn btn-success btn-lg" onClick={this.authenticateUser}>Try It Now... </button>
                  </li>
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
