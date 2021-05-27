import React, {Component} from 'react';
import {
    Card, CardImg,
    CardBody, CardText,
    CardTitle, Breadcrumb,
    BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody,
    Label, Col, Row
} from 'reactstrap';
import {Control, LocalForm, Errors} from "react-redux-form";
import {Link} from 'react-router-dom';



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



const RenderDish = ({dish}) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image}></CardImg>
                <CardBody>
                    <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

const RenderComments = ({comments}) => {
    if(comments != null)
    {
        const commentListItems = comments.map(comment => {
           return (
               <li key={comment.id}>
                   <p>{comment.comment}</p>
                   <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
               </li>
           );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {commentListItems}
                </ul>
                <CommentForm />
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
};

const DishDetail = (props) => {
    if (props.dish != null)
    {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
};

export default DishDetail;