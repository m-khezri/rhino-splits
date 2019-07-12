import React from 'react';
import './MyNavbar.scss';
import authRequests from '../../helpers/data/authRequests';
import logo from '../../images/logo.png';


class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
    }).catch(err => console.error('there was an error with auth', err));
  }


  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    const userName = () => authRequests.getCurrentUserName();
    const userPic = () => authRequests.getCurrentUserPhoto();

    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg">
          <img className="navbar-brand" src={logo} alt="Logo" />;
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {isAuthed
                  ?
                  <div>
                    <img src={userPic} alt="user" />
                    <h6>Welcome,<span>{userName}</span></h6>
                    <a className='nav-link' href='#http://localhost:3000/' onClick={logoutClickEvent}>Logout</a>
                  </div>
                  :
                  <li>
                    <button className="btn btn-light" onClick={this.authenticateUser}>Login</button>
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
