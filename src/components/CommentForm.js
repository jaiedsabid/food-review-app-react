import React, {Component} from 'react';
import {Button, Label, Col, Row, Modal, ModalHeader, ModalBody} from "reactstrap";
import {Control, LocalForm, Errors} from "react-redux-form";


const required = val => val && val.length;
const minLen = len => val => val && (val.length >= len);
const maxLen = len => val => !(val) || (val.length <= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () => this.setState({
        isModalOpen: !this.state.isModalOpen
    });
    handleSubmit = (values) => {
        alert("Your comment: " + JSON.stringify(values));
    };

    render() {
        return (
            <div>
                <Button onClick={this.toggleModal} outline color="secondary">
                    <i className="fa fa-pencil"></i> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating"
                                                    name="rating"
                                                    className="form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author " md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author"
                                                  name="author" placeholder="Your Name"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLen: minLen(3), maxLen: maxLen(15)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: "Required. ",
                                            minLen: "Must be at least be 3 characters long. ",
                                            maxLen: "Must be less than or equal to 15 characters. "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment"
                                                      name="comment" placeholder="Your Comment"
                                                      className="form-control"
                                                      rows={6}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default CommentForm;