import React from "react";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

import Header from "./Header";
import CardList from "./CardList";
import Controller from "./Controller";
import Footer from "./Footer";
import FooterBirthday from "./FooterBirthday";
import CardListBirthday from "./CardListBirthday";

import generic from "./images/ico.png";
import noimage from "./images/no-image.png";

class App extends React.Component {
  state = {
    items: [{ id: uuid(), image: generic }],
    birthdays: [{ id: uuid(), image: noimage }],
    toggle: true
  };

  handleChange = (id, file) => {
    this.setState(prevState => {
      if (!this.state.toggle) {
        const newItems = prevState.birthdays;
        const index = newItems.findIndex(card => card.id === id);
        if (file) {
          newItems[index].image = URL.createObjectURL(file);
        }

        return {
          birthdays: newItems
        };
      } else {
        const newItems = prevState.items;
        const index = newItems.findIndex(card => card.id === id);
        if (file) {
          newItems[index].image = URL.createObjectURL(file);
        }

        return {
          items: newItems
        };
      }
    });
  };

  handleAddCard = () => {
    this.setState(prevState => {
      if (this.state.toggle) {
        return {
          items: prevState.items.concat({ id: uuid(), image: generic })
        };
      } else {
        return {
          birthdays: prevState.birthdays.concat({ id: uuid(), image: noimage })
        };
      }
    });
  };

  handleRemoveCard = () => {
    this.setState(prevState => {
      if(this.state.toggle){
      const newItems = prevState.items.slice();
      const index = newItems.length-1;
      console.log(index);
      const ret = newItems.splice(index, 1)[0];  
      return {
        items: newItems
      };}
      else{
      const newItems = prevState.birthdays.slice();
      const index = newItems.length-1;
      const ret = newItems.splice(index, 1)[0]

      return {
        birthdays: newItems
      };

      }
    }
    );
  };

  handleToggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

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
          </React.Fragment>
        ) : (
            <div className="container">
              <div className="app-bd">
                <CardListBirthday
                  cards={this.state.birthdays}
                  handleChange={this.handleChange}
                />
                <FooterBirthday />
              </div>
            </div>
          )}

        <div className="container">
          <Controller
            onAddCard={this.handleAddCard}
            onRemoveCard={this.handleRemoveCard}
            handleToggle={this.handleToggle}
            toggle={this.state.toggle}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
