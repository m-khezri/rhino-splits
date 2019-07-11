import React from 'react';
import './PaymentModal.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import authRequests from '../../helpers/data/authRequests';
import PropTypes from 'prop-types';

const defaultPayment = {
  date: '',
  subject: '',
  price: 0,
  uid: '',
};

class PaymentModal extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    newPayment: defaultPayment,
  }

  submitPayment = (name, e) => {
    e.preventDefault();
    const tempPayment = { ...this.state.newPayment };
    tempPayment[name] = e.target.value;
    this.setState({ newPayment: tempPayment });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle = this.toggle.bind(this);

  dateChange = e => this.submitPayment('date', e);

  subjectChange = e => this.submitPayment('subject', e);

  priceChange = e => this.submitPayment('price', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myPayment = { ...this.state.newPayment };
    myPayment.uid = authRequests.getCurrentUid();
    console.error(myPayment);
    onSubmit(myPayment);
    this.setState({ newPayment: defaultPayment });
    this.toggle();
  }

  render() {
    const { newPayment } = this.state;
    return (
      <div className="paymentModal-container">
        <div>
          <Button className="btn btn-success" color="success" onClick={this.toggle}>{this.props.buttonLabel}Make a payment</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Make a payment</ModalHeader>
            <ModalBody>

              <Form onSubmit={this.formSubmit}>
                <FormGroup row>
                  <Label className="mt-3" htmlfor="firstName" sm={6}>Date</Label>
                  <Col sm={12}>
                    <Input
                      type="date"
                      id="date"
                      placeholder="Date"
                      value={newPayment.date}
                      onChange={this.dateChange}
                    />
                  </Col>

                  <Label className="mt-3" htmlfor="subject" sm={6}>Subject</Label>
                  <Col sm={12}>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="What's the payment for?"
                      value={newPayment.subject}
                      onChange={this.subjectChange}
                    />
                  </Col>

                  <Label className="mt-3" htmlfor="price" sm={6}>Price</Label>
                  <Col sm={12}>
                    <Input
                      type="price"
                      id="price"
                      placeholder="$"
                      value={newPayment.price}
                      onChange={this.priceChange}
                    />
                  </Col>
                </FormGroup>
              </Form>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.formSubmit}>Pay Now</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default PaymentModal;