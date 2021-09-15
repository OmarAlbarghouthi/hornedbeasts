import React from "react";
import {Button,Modal} from 'react-bootstrap/';
import data from './Data.json';
import Form from "react-bootstrap/Form";


class BeastModel extends React.Component{




  constructor (props){
    super(props)
    this.state={
      showModel : false,
      horns : 0
    }
  }

  render(){
    
    
    let imgUrl =<img src={this.props.animal.image_url} alt="" width ={475}/> 


    return(
        <>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name: {this.props.animal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {imgUrl}{this.props.animal.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
        </>
    )

}
}
export default BeastModel;