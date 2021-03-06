import React from "react";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

import ChooseTemplate from "./ChooseTemplate";
import Controller from "./Controller";

import generic from "./images/ico.png";
import assis from "./images/assis.jpg";
import digital from "./images/digital.jpg";
import ibmp from "./images/IBM.jpg";
import casalbertobins from "./images/cas-alberto-bins.jpeg";
import agibankplace from "./images/agibank-place.png";
import noimage from "./images/default-image.jpg";
import sicrediLogo from "./images/sicredi.png";
import agibankLogo from "./images/agibank.png";
import placeholder from "./images/placeholder.png";
import ibmtutoia from "./images/ibm-tutoia.jpg";


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
        map: "Selecione Lugar",
        imageMap: noimage,
        logoSelectValue: placeholder
      }
    ],
    birthdays: [{ id: 1, image: generic, name: "", date: "", place: "Selecione Lugar" }],
    toggle: 1,
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
      var newItems = null;
      var index = -1;
      switch (this.state.toggle) {
        case 1:
          newItems = prevState.items;
          index = newItems.findIndex(card => card.id === id);
          if (file) {
            newItems[index].image = file.toDataURL();
          }

          return {
            items: newItems
          };

          break;

        case 2:
          newItems = prevState.birthdays;
          index = newItems.findIndex(card => card.id === id);
          if (file) {
            newItems[index].image = file.toDataURL();
          }
          return {
            birthdays: newItems
          };
          break;

        default:
          console.log("Não foi possível salvar a foto");
          break;
      }
    });
  };

  handleAddCard = () => {
    this.setState(prevState => {
      switch (this.state.toggle) {
        case 1:
          return {
            items: prevState.items.concat({
              id: uuid(),
              image: generic,
              name: "",
              godparent: "",
              leader: "",
              team: "",
              area: "",
              map: "Selecione Lugar",
              imageMap: noimage,
              logoSelectValue: placeholder
              
            })
          };
          break;
        case 2:
          {
            return {
              birthdays: prevState.birthdays.concat({
                id: uuid(),
                image: generic,
                name: "",
                date: "",
                place: "Selecione Lugar"
              })
            };
          }
          break;
        default:
          console.info("Could not add a card");
      }
    });
  };

  handleRemoveCard = () => {
    this.setState(prevState => {
      const { toggle } = this.state;
      var newItems = null;
      var index = null;
      var ret = null;
      switch (toggle) {
        case 1:
          newItems = prevState.items.slice();
          index = newItems.length - 1;
          ret = newItems.splice(index, 1)[0];
          return {
            items: newItems
          };
          break;

        case 2:
          newItems = prevState.birthdays.slice();
          index = newItems.length - 1;
          ret = newItems.splice(index, 1)[0];

          return {
            birthdays: newItems
          };
          break;
        default:
          break;
      }
    });
  };

  handleChangeLogo = (logo, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      if (logo == "sicredi") {
        newItems[index].logoSelectValue = sicrediLogo;
      }

      if (logo == "agibank") {
        newItems[index].logoSelectValue = agibankLogo;
      }

      return {
        items: newItems
      };
    });
  };

  handleToggle = id => {
    this.setState({
      toggle: id
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
      
      if (text == "downtownibm") {
        newItems[index].place = "CAS - Alberto Bins";
      }
      if (text == "digital") {
        newItems[index].place = "PUC - Sicredi Digital"
      }
      if (text == "assis") {
        newItems[index].place = "CAS - Assis Brasil"
      }
      if (text == "ibmp") {
        newItems[index].place = "IBM - Filial"
      }
      if (text == "agibankplace") {
        newItems[index].place = "Agibank"
      }
      if (text == "ibmsp") {
        newItems[index].place = "IBM Tutóia - SP"
      }
      return {
        birthdays: newItems
      };
    });
  };

  handleChangeMap = (value, id) => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const index = newItems.findIndex(card => card.id === id);
      newItems[index].map = value;

      if (value == "assis") {
        newItems[index].imageMap = assis;
        newItems[index].map = "CAS - Assis Brasil";
      }

      if (value == "digital") {
        newItems[index].imageMap = digital;
        newItems[index].map = "PUC - Sicredi Digital"
      }

      if (value == "ibmp") {
        newItems[index].imageMap = ibmp;
        newItems[index].map = "IBM Filial"
      }

      if (value == "downtownibm") {
        newItems[index].imageMap = casalbertobins;
        newItems[index].map = "CAS - Alberto Bins"
      }

      if (value == "agibankplace") {
        newItems[index].imageMap = agibankplace;
        newItems[index].map = "Agibank"
      }

      if (value == "ibmsp") {
        newItems[index].imageMap = ibmtutoia;
        newItems[index].map = "IBM Tutóia - SP"
      }

      return {
        items: newItems
      };
    });
  };

  render() {
    const { bdMonthText, toggle, items, birthdays } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div id="application">
            <ChooseTemplate
              id={toggle}
              cards={items}
              handleChange={this.handleChange}
              handleNameChange={this.handleNameChange}
              handleGodparentChange={this.handleGodparentChange}
              handleLeaderChange={this.handleLeaderChange}
              handleTeamChange={this.handleTeamChange}
              handleAreaChange={this.handleAreaChange}
              handleChangeMap={this.handleChangeMap}
              cardsBd={birthdays}
              handleNameBdChange={this.handleNameBdChange}
              handlePlaceBdChange={this.handlePlaceBdChange}
              handleDateBdChange={this.handleDateBdChange}
              bdMonthText={bdMonthText}
              handleBdMonthChange={this.handleBdMonthChange}
              handleChangeLogo={this.handleChangeLogo}
            />
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
