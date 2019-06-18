import React from "react";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

import ChooseTemplate from "./ChooseTemplate";
import Controller from "./Controller";

import generic from "./images/ico.png";
import assis from "./images/assis.jpg";
import digital from "./images/digital.jpg";
import ibmp from "./images/IBM.jpg";
import casalbertobins from "./images/cas-alberto-bins.png";
import agibankplace from "./images/agibank-place.png";

import noimage from "./images/no-image.png";

import sicrediLogo from "./images/sicredi.png";
import agibankLogo from "./images/agibank.png";
import ibmlogo from "./images/IBM.png";

import placeholder from "./images/placeholder.png";

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
        map: "selecione",
        imageMap: noimage,
        logoImage: placeholder
      }
    ],
    birthdays: [{ id: 1, image: generic, name: "", date: "", place: "" }],
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
      switch(this.state.toggle) {
        case 1:
        newItems = prevState.items;
        index = newItems.findIndex(card => card.id === id);
        if (file) {
          newItems[index].image = URL.createObjectURL(file);
        }

        return {
          items: newItems
        };

        break;
        
        case 2:
          newItems = prevState.birthdays;
          index = newItems.findIndex(card => card.id === id);
          if (file) {
            newItems[index].image = URL.createObjectURL(file);
          }
          return {
            birthdays: newItems
          };
        break;
      
      default: 
        console.log("Não foi possível salvar a foto!!!!!!!!!");
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
              map: "selecione",
              imageMap: noimage,
              logoImage: placeholder
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
                place: ""
              })
            };
          }
          break;
        default:
          console.info("qq tu fez errado ai meu?");
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
        newItems[index].logoImage = ibmlogo;
      }

      if (value == "downtownibm") {
        newItems[index].imageMap = casalbertobins;
        newItems[index].logoImage = sicrediLogo;
      }

      if (value == "agibankplace") {
        newItems[index].imageMap = agibankplace;
        newItems[index].logoImage = agibankLogo;
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
