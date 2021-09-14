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

                <Card style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={this.props.image_url} alt="" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                         {this.state.description}
                         Number of pets {this.state.numOfPets}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfPets} variant="primary">Vote</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeast;