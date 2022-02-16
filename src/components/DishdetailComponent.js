import React, { Component } from 'react';
import { CardImg, CardText, CardTitle, Card, CardBody } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);


    }

    renderDish(dish) {

        const imagePosition = {

            // borderWidth: '0px',

        }

        if (dish != null) {
            return (

                <Card className="col-12 col-md-5 m-1" style={imagePosition}>
                    <CardImg width="%100" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    selectedDishComments(dish) {

        if (dish.length != 0) {

            return (

                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    {dish.map(cmnt => (
                        <ul className='list-unstyled'>
                            <li>
                                <p>{cmnt.comment}</p>
                                <p>--{cmnt.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmnt.date)))}</p>
                            </li>
                        </ul>
                    ))}
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }



    }



    render() {

        let dish;

        if (this.props.selectedDish) {

            dish = (
                <div class="container">

                    <div className='row'>
                        {this.renderDish(this.props.selectedDish)}
                        {this.selectedDishComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );

        }
        else {
            dish = <div></div>
        }
        return (
            <div className='container'>
                {dish}
            </div>
        );

    }


}
export default DishDetail;