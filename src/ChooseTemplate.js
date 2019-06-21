import React from "react";


import Footer from "./welcome/Footer";
import FooterBirthday from "./birthday/FooterBirthday";
import CardListBirthday from "./birthday/CardListBirthday";
import HeaderBirthday from "./birthday/HeaderBirthday";
import Header from "./welcome/Header";
import CardList from "./welcome/CardList";

class ChooseTemplate extends React.Component {
  render() {
    const {
      id,
      handleChange,
      handleNameChange,
      handleGodparentChange,
      handleLeaderChange,
      handleTeamChange,
      handleAreaChange,
      handleChangeMap,
      cards,
      cardsBd,
      handleNameBdChange,
      handlePlaceBdChange,
      handleDateBdChange,
      bdMonthText,
      handleBdMonthChange,
      handleChangeLogo
    } = this.props;
    switch (id) {
      case 1:
        return (
          <div className="app">
            <Header />
            <CardList
              cards={cards}
              handleChange={handleChange}
              handleNameChange={handleNameChange}
              handleGodparentChange={handleGodparentChange}
              handleLeaderChange={handleLeaderChange}
              handleTeamChange={handleTeamChange}
              handleAreaChange={handleAreaChange}
              handleChangeMap={handleChangeMap}
              handleChangeLogo={handleChangeLogo}
            />
            <Footer />
          </div>
        );
        break;
      case 2:
        return (
          <div className="app-bd">
            <div className="app-bd-balloon">
              <div className="app-bd-confetti">
                <HeaderBirthday
                  bdMonthText={bdMonthText}
                  handleBdMonthChange={handleBdMonthChange}
                />
                <CardListBirthday
                  cards={cardsBd}
                  handleChange={handleChange}
                  handleNameBdChange={handleNameBdChange}
                  handlePlaceBdChange={handlePlaceBdChange}
                  handleDateBdChange={handleDateBdChange}
                />
                <FooterBirthday />
              </div>
            </div>
          </div>
        );
        break;
      default:
        return <h1 style={{ color: "red" }}> DEU GURU </h1>;
        break;
    }
  }
}

export default ChooseTemplate;
