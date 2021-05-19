import React, {useRef, useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const [isOpenNav, toggleNav] = useState(false);
    const [isOpenModal, toggleModal] = useState(false);
    let username = useRef(null);
    let password = useRef(null);
    let remember = useRef(null);

    const setToggleNav = () => {return toggleNav(!isOpenNav);};
    const setToggleModal = () => {return toggleModal(!isOpenModal);};
    const handleSubmit = (evt) => {
        toggleModal();
        alert('Username: ' + username.current.value
            + '\nPassword: ' + password.current.value + '\nRemember Me: '
            + remember.current.checked
        );
        evt.preventDefault();
    };

    return (
        <React.Fragment>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png"
                             height="30px" width="41px"
                             alt="Ristorante Con Fusion"
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={setToggleNav} />
                    <Collapse isOpen={isOpenNav} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about-us">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact-us">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}>
                                    <span className='fa fa-sign-in fa-lg'></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>
                                We take inspiration from the World's best cuisines,
                                and create a unique fusion experience. Our lipsmacking
                                creations will tickle your culinary senses!
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={isOpenModal} toggle={setToggleModal}>
                <ModalHeader toggle={setToggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor='username'>Username: </Label>
                            <Input type="text" name="username" id="username"
                                   innerRef={username}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password: </Label>
                            <Input type="password" name="password" id="password"
                                   innerRef={password}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label htmlFor="remember">
                                <Input type="checkbox" name="remember" id="remember"
                                       innerRef={remember}
                                />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary">
                            Login
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

export default Header;