import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BeastModel from "./Modal";
import Forms from "./Forms";

class HornedBeast extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            numOfPets: 0,
            showModel: false

        }
    }

    increaseNumberOfPets = () => {

        this.setState({
            numOfPets: this.state.numOfPets + 1
        })

    }

   showMoldelfunction= () => {
        this.props.beastButton(this.props.title)

    }

    render() {
        return (
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt="" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Number of pets {this.state.numOfPets}
                            <br/>
                            Horns Number = {this.props.horns}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfPets} variant="primary">Vote</Button>
                        <Button onClick={this.showMoldelfunction} variant="primary"> Show </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeast;