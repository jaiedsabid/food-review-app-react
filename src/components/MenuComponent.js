import React, { Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Row, Col} from 'reactstrap';
import DishDetail from './DishdetailComponent';



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onSelectDish = dish => {
        this.setState({selectedDish: dish})
    };
    

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onSelectDish(dish)} key={dish.id}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                        <CardBody>
                            <CardTitle className="font-weight-bold">{ dish.name }</CardTitle>
                        </CardBody>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    { menu }
                </div>
                <DishDetail dish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;