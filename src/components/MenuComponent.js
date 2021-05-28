import React from 'react';
import {
    Card, CardImg, CardImgOverlay,
    CardBody, CardTitle, Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';


const RenderMenuComponent = ({dish}) => {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardBody>
                        <CardTitle className="font-weight-bold">{ dish.name }</CardTitle>
                    </CardBody>
                </CardImgOverlay>
            </Link>
        </Card>
    );
};

const Menu = (props) => {
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuComponent dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb className="mt-1">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                { menu }
            </div>
        </div>
    );
};


export default Menu;