import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            numOfPets: 0

        }
    }

    increaseNumberOfPets = () => {

        this.setState({
            numOfPets: this.state.numOfPets + 1
        })

    }


    render() {
        return (
            <div>
                {/* <p>{this.props.catName}</p>
                <p>{this.state.numOfPets}</p>
                <img onClick={this.increaseNumberOfPets} src={this.props.catImg} alt="" width={300} /> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.increaseNumberOfPets} variant="top" src={this.props.catImg} alt="" />
                    <Card.Body>
                        <Card.Title>{this.props.catName}</Card.Title>
                        <Card.Text>
                          Number of Pets {this.state.numOfPets}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeast;