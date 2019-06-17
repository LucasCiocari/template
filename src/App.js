import React from "react";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

import Header from "./Header";
import CardList from "./CardList";
import Controller from "./Controller";
import Footer from "./Footer";
import FooterBirthday from "./FooterBirthday";
import CardListBirthday from "./CardListBirthday";
import HeaderBirthday from "./HeaderBirthday";

import generic from "./images/ico.png";
import assis from "./images/assis.jpg";
import digital from "./images/digital.jpg";
import ibmp from "./images/IBM.jpg";
import downtownibm from "./images/no-image.png";
import agibankplace from "./images/no-image.png";
import banrisulplace from "./images/no-image.png"; 

import sicrediLogo from "./images/sicredi.png";
import agibankLogo from "./images/agibank.png";
import banrisulLogo from "./images/banrisul.png";

class App extends React.Component {
  state = {
    items: [
      {
        id: 0,
        image: generic,
        name: "",
        godparent: "",
        leader: "",
        team: "",
        area: "",
        map: "assis",
        imageMap: assis,
        logoImage: sicrediLogo
      }
    ],
    birthdays: [{ id: 1, image: generic, name: "", date: "", place: "" }],
    toggle: true,
    bdMonthText: ""
  };

  handleNameChange = (text, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].name = text;

      return { items: newItems };
    });
  };
  handleGodparentChange = (text, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].godparent = text;

      return { items: newItems };
    });
  };
  handleLeaderChange = (text, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].leader = text;

      return { items: newItems };
    });
  };
  handleTeamChange = (text, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].team = text;

      return { items: newItems };
    });
  };
  handleAreaChange = (text, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].area = text;

      return { items: newItems };
    });
  };

  handleDateBdChange = (date, id) => {
    this.setState(prevState => {
      const newItems = prevState.birthdays;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].date = date;

      return { birthdays: newItems };
    });
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
          items: prevState.items.concat({
            id: uuid(),
            image: generic,
            name: "",
            godparent: "",
            leader: "",
            team: "",
            area: "",
            map: "assis",
            imageMap: assis
          })
        };
      } else {
        return {
          birthdays: prevState.birthdays.concat({
            id: uuid(),
            image: generic,
            name: "",
            date: "",
            place: ""
          })
        };
      }
    });
  };

  handleRemoveCard = () => {
    this.setState(prevState => {
      if (this.state.toggle) {
        const newItems = prevState.items.slice();
        const index = newItems.length - 1;
        console.log(index);
        const ret = newItems.splice(index, 1)[0];
        return {
          items: newItems
        };
      } else {
        const newItems = prevState.birthdays.slice();
        const index = newItems.length - 1;
        const ret = newItems.splice(index, 1)[0];

        return {
          birthdays: newItems
        };
      }
    });
  };

  handleToggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  handleBdMonthChange = text => {
    this.setState({
      bdMonthText: text
    });
  };

  handleNameBdChange = (text, id) => {
    this.setState(prevState => {
      const newItems = prevState.birthdays;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].name = text;

      return { birthdays: newItems };
    });
  };

  handlePlaceBdChange = (text, id) => {
    this.setState(prevState => {
      const newItems = prevState.birthdays;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].place = text;

      return { birthdays: newItems };
    });
  };

  handleChangeMap = (value, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].map = value;

      if (value == "assis") {
        newItems[index].imageMap = assis;
        newItems[index].logoImage = sicrediLogo;
      }

      if (value == "digital") {
        newItems[index].imageMap = digital;
        newItems[index].logoImage = sicrediLogo;
      }

      if (value == "ibmp") {
        newItems[index].imageMap = ibmp;
        newItems[index].logoImage = sicrediLogo;
      }

      if (value == "downtownibm") {
        newItems[index].imageMap = downtownibm;
        newItems[index].logoImage = sicrediLogo;
      }

      if (value == "agibankplace") {
        newItems[index].imageMap = agibankplace;
        newItems[index].logoImage = agibankLogo;
      }

      if (value == "banrisulplace") {
        newItems[index].imageMap = banrisulplace;
        newItems[index].logoImage = banrisulLogo;
      }

      return {
        items: newItems
      };
    });
  };

  render() {
    const { bdMonthText } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div id="application">
            {this.state.toggle ? (
              <div className="app">
                <Header />
                <CardList
                  cards={this.state.items}
                  handleChange={this.handleChange}
                  handleNameChange={this.handleNameChange}
                  handleGodparentChange={this.handleGodparentChange}
                  handleLeaderChange={this.handleLeaderChange}
                  handleTeamChange={this.handleTeamChange}
                  handleAreaChange={this.handleAreaChange}
                  handleChangeMap={this.handleChangeMap}
                />
                <Footer />
              </div>
            ) : (
              <div className="app-bd">
                <div className="app-bd-balloon">
                  <div className="app-bd-confetti">
                    <HeaderBirthday
                      bdMonthText={bdMonthText}
                      handleBdMonthChange={this.handleBdMonthChange}
                    />
                    <CardListBirthday
                      cards={this.state.birthdays}
                      handleChange={this.handleChange}
                      handleNameBdChange={this.handleNameBdChange}
                      handlePlaceBdChange={this.handlePlaceBdChange}
                      handleDateBdChange={this.handleDateBdChange}
                    />
                    <FooterBirthday />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

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
