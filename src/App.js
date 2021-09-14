import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer';
import HornedBeast from "./components/HornedBeast";
import Main from "./components/Main";
import data from './components/Data.json';
import BeastModel from './components/Modal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: this.props.data,
      animal: {},
      showModel: false,


    }


  }

  handleClose = () => {
    this.setState({ showModel: false })
  }

  beastButton = (title) => {
    let selcted = data.find(animal => {

      if (animal.title === title) {
        return animal;
      }


    })
    this.setState({
      showModel: true,
      animal: selcted,

    })
  }


  render() {
    return (
      <>
        <Header />
        <Main beastButton={this.beastButton} Data={data} />
        <BeastModel
          show={this.state.showModel}
          handleClose={this.handleClose}
          animal={this.state.animal}
          beastButton={this.beastButton}
        />
        <Footer />
      </>

    )
  }
}
export default App;