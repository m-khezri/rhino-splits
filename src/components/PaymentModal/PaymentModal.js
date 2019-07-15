import React from 'react';
import './PaymentModal.scss';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import formatPrice from '../../helpers/formatPrice';
import authRequests from '../../helpers/data/authRequests';

const defaultPayment = {
  date: '',
  subject: '',
  amount: 0.00,
  uid: '',
};

class PaymentModal extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    modal: false,
    newPayment: defaultPayment,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempPayment = { ...this.state.newPayment };
    tempPayment[name] = e.target.value;
    this.setState({ newPayment: tempPayment });
  }

  paymentSubmitEvent = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myPayment = { ...this.state.newPayment };
    myPayment.uid = authRequests.getCurrentUid();
    onSubmit(myPayment, false);
    this.setState({ newPayment: defaultPayment });
    this.toggle();
  }


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  toggle = this.toggle.bind(this);

  dateChange = e => this.formFieldStringState('date', e);

  subjectChange = e => this.formFieldStringState('subject', e);

  amountChange = e => this.formFieldStringState('amount', e);


  render() {
    const { newPayment } = this.state;
    return (
      <div className="paymentModal-container">
        <div>
          <Button className="btn btn-success" color="success" onClick={this.toggle}>{this.props.buttonLabel}Make a payment</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Make a payment</ModalHeader>
            <ModalBody>

              <Form>
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

                  <Label className="mt-3" htmlfor="amount" sm={6}>Amount</Label>
                  <Col sm={12}>
                    <Input
                      type="amount"
                      id="amount"
                      placeholder="$0.00"
                      value={formatPrice(newPayment.amount)}
                      onChange={this.amountChange}
                    />
                  </Col>
                </FormGroup>
              </Form>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.paymentSubmitEvent}>Pay Now</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default PaymentModal;
