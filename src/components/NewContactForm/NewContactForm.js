import React from 'react';
import './NewContactForm.scss';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import friendsRequests from '../../helpers/data/friendsRequests';

const defaultContact = {
  name: '',
  lastname: '',
  email: '',
  phoneNum: 0,
  uid: '',
};

class newContactForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
  }

  state = {
    modal: false,
    newContact: defaultContact,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempContact = { ...this.state.newContact };
    tempContact[name] = e.target.value;
    this.setState({ newContact: tempContact });
  }

  firstNameChange = e => this.formFieldStringState('name', e);
  lastNameChange = e => this.formFieldStringState('lastname', e);
  emailChange = e => this.formFieldStringState('email', e);
  phoneChange = e => this.formFieldStringState('phone', e);


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle = this.toggle.bind(this);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myFriend = { ...this.state.newContact };
    myFriend.uid = authRequests.getCurrentUid();
    onSubmit(myFriend, false);
    this.setState({ newFriend: defaultContact });
    this.toggle();
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      friendsRequests.getSingleFriend(editId)
        .then((friend) => {
          this.setState({ newFriend: friend.data });
        })
        .catch(err => console.error('error with getSingleFriend', err));
    }
  }

  render() {
    const { newContact } = this.state;
    return (
      <div className="control-bar-container m-0">
        <div>
          <div className="d-flex">
            <div>
              <Button className="btn btn-info btn-lg" color="success" onClick={this.toggle}>{this.props.buttonLabel}
                <i className="mr-2 large material-icons">person_add</i>Add new friend
            </Button>
            </div>
            {/* <div className="mx-5 w-25">
              <input class="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search" value={this.inputSearch} onKeyup={this.handleInputChange} />
            </div> */}

          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Create new contact</ModalHeader>
            <ModalBody>

              <Form onSubmit={this.formSubmit}>
                <FormGroup row>
                  <Label className="mt-3" htmlfor="firstName" sm={6}>First name</Label>
                  <Col sm={12}>
                    <Input
                      type="text"
                      value={newContact.name}
                      id="name"
                      placeholder="First name"
                      onChange={this.firstNameChange}
                    />
                  </Col>

                  <Label className="mt-3" htmlfor="lastName" sm={6}>Last name</Label>
                  <Col sm={12}>
                    <Input
                      type="text"
                      value={newContact.lastname}
                      id="lastname"
                      placeholder="Last name"
                      onChange={this.lastNameChange}
                    />
                  </Col>

                  <Label className="mt-3" htmlfor="email" sm={6}>Email address</Label>
                  <Col sm={12}>
                    <Input
                      type="email"
                      value={newContact.email}
                      id="email"
                      placeholder="xxx@xxx.xxx"
                      onChange={this.emailChange}
                    />
                  </Col>

                  <Label className="mt-3" htmlfor="phone" sm={6}>Phone number</Label>
                  <Col sm={12}>
                    <Input
                      type="phone"
                      value={newContact.phone}
                      id="phone"
                      placeholder="(xxx)xxx-xxxx"
                      onChange={this.phoneChange}
                    />
                  </Col>
                </FormGroup>
              </Form>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.formSubmit}>Save</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default newContactForm;