import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer';
import HornedBeast from "./components/HornedBeast";
import Main from "./components/Main";
import data from './components/Data.json';
import BeastModel from './components/Modal';
import Forms from "./components/Forms";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: this.props.data,
      animal: {},
      showModel: false,
      selcted: data


    }


  }

  handleClose = () => {
    this.setState({
      showModel: false
    })
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

  submitHndlr =  (event) => {
    event.preventDefault();
    this.setState({
      horns: event.target.option.value
    });

    let filterAraay = data.filter(element => {

      if (element.horns === Number(event.target.option.value)) {
        return element;
      }
    })

    this.setState({
      selcted: filterAraay
    })
  }


  render() {
    return (
      <>
        <Header />
        <Main beastButton={this.beastButton} Data={data} filterAraay={this.state.selcted} />
        <BeastModel
          show={this.state.showModel}
          handleClose={this.handleClose}
          animal={this.state.animal}
          beastButton={this.beastButton}
        />
        <Forms submitHndlr={this.submitHndlr} />
        <Footer />
      </>

    )
  }
}
export default App;