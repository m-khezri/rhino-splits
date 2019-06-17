import React from 'react';
import './NewContactForm.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';


class NewContactForm extends React.Component {

  state = {
    modal: false,
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle = this.toggle.bind(this);

  render() {
    return (
      <div className="control-bar-container m-0 p-4">
        <div>
          <Button className="btn btn-danger btn-lg" color="danger" onClick={this.toggle}>{this.props.buttonLabel}Create contact</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Create new contact</ModalHeader>
            <ModalBody>

              <Form>
                <FormGroup row>
                  <Label for="firstName" sm={6}>First name</Label>
                  <Col sm={12}>
                    <Input type="text" name="firstName" id="firstName" placeholder="First name" />
                  </Col>
                  <Label for="lastName" sm={6}>Last name</Label>
                  <Col sm={12}>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last name" />
                  </Col>
                  <Label for="exampleEmail" sm={6}>Email address</Label>
                  <Col sm={12}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="E-mail address" />
                  </Col>
                  <Label for="phone" sm={6}>Phone number</Label>
                  <Col sm={12}>
                    <Input type="phone" name="phone" id="phone" placeholder="Phone number" />
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

export default NewContactForm;