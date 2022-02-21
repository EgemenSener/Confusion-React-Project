import React from 'react';
import { CardImg, CardText, CardTitle, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderDish = ({ dish }) => {


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
const RenderComments = ({ comments }) => {


    if (comments != 0) {

        return (

            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map(cmnt => (
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

const DishDetail = (props) => {

    let dish;

    if (props.dish != null) {

        dish = (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    
                        <RenderDish dish={props.dish} />
                    
                    
                        <RenderComments comments={props.comments} />
                    
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

export default DishDetail;