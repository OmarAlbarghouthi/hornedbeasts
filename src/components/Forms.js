import React from "react";
import { Button, Form } from 'react-bootstrap/';



class Forms extends React.Component {


  render() {


    return (

      <>

        <Form onChange ={this.props.submitHndlr}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> How many horns? </Form.Label>

          </Form.Group>

          <Form.Select aria-label="Default select example" name='option'>
            <option>All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Wow..</option>

          </Form.Select>

          
        </Form>

      </>
    )

  }
}

export default Forms;