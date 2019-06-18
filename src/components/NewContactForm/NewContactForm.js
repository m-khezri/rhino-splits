import React from 'react';
import './NewContactForm.scss';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';


const defaultContact = {
  name: '',
  lastName: '',
  email: '',
  phoneNum: 0,
  uid: '',
};

class newContactForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
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

  firstNameChange = e => this.formFieldStringState('firstName', e);
  lastNameChange = e => this.formFieldStringState('lastName', e);
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
    const myFriend = { ...this.state.newFriend };
    myFriend.uid = authRequests.getCurrentUid();
    onSubmit(myFriend);
    this.setState({ newFriend: defaultContact });
  }

  render() {
    const { newContact } = this.state;
    return (
      <div className="control-bar-container m-0 p-4">
        <div>
          <Button className="btn btn-success btn-lg" color="success" onClick={this.toggle}>{this.props.buttonLabel}
            <i className="mr-2 large material-icons">person_add</i>Add new friend</Button>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Create new contact</ModalHeader>
            <ModalBody>

              <Form onSubmit={this.formSubmit}>
                <FormGroup row>
                  <Label className="mt-3" htmlfor="firstName" sm={6}>First name</Label>
                  <Col sm={12}>
                    <Input
                      type="text"
                      value={newContact.firstName}
                      id="firstName"
                      placeholder="First name"
                      onChange={this.firstNameChange}
                    />
                  </Col>

                  <Label className="mt-3" htmlfor="lastName" sm={6}>Last name</Label>
                  <Col sm={12}>
                    <Input
                      type="text"
                      value={newContact.lastName}
                      id="lastName"
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
              <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default newContactForm;