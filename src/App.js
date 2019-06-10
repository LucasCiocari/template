import React from "react";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

import Header from "./Header";
import CardList from "./CardList";
import Controller from "./Controller";
import Footer from "./Footer";

import generic from "./images/ico.png";

class App extends React.Component {
  state = {
    items: [{ id: uuid(), image: generic }],
    toggle: false
  };

  handleChange = (id, file) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      if (file) {
        newItems[index].image = URL.createObjectURL(file);
      }

      return {
        items: newItems
      };
    });
  };

  handleAddCard = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.concat({ id: uuid(), image: generic })
      };
    });
  };

  handleToggle = () => {
      this.setState( prevState => {
          return ( {
                toggle : !prevState.toggle
            }
          )
      })
  }

  render() {
    return (
        <React.Fragment>
        {this.state.toggle ? (
            <React.Fragment>
                <div className="container" id="aplicacao">
                <div className="app">
                    <Header />
                    <CardList
                    cards={this.state.items}
                    handleChange={this.handleChange}
                    />
                    <Footer />
                </div>
                </div>
            </React.Fragment> ) 
      : (
          <div>Oi</div>
      )}

      <div className="container">
            <Controller 
                onAddCard={this.handleAddCard} 
                handleToggle={this.handleToggle}
                toggle={this.state.toggle}
            />
        </div>

        </React.Fragment>
    
    );
  }
}

export default App;
