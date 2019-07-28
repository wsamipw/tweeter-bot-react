import React, { Component } from "react";
import {
  Modal,
  ModalBody,
} from "reactstrap";

class CustomModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
        size="lg"
      >
        {/* <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader> */}
        <ModalBody>
         {this.props.children}
        </ModalBody>
      </Modal>
    );
  }
}
    
export default CustomModal;