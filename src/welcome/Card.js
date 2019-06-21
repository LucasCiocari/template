import React from "react";
import classNames from "classnames"

import ProfileImage from "./ProfileImage"
import PersonInfo from "./PersonInfo"
import Place from "./Place"


class Card extends React.Component {
  state = {
    scale: 1.0
  };

  render() {
    
    const {
      index,
      card,
      handleChange,
      handleChangeMap,
      handleChangeLogo,
      handleNameChange,
      handleGodparentChange,
      handleLeaderChange,
      handleTeamChange,
      handleAreaChange
    } = this.props;

    return (
      <div
        className={classNames( "carta", { "carta--azul": index % 2 == 0 }, { "carta--branca": index % 2 == 1 } ) }
      >

        <PersonInfo handleNameChange={handleNameChange} handleGodparentChange={handleGodparentChange}
                    handleLeaderChange={handleLeaderChange} handleTeamChange={handleTeamChange}
                    handleAreaChange={handleAreaChange} card={card}
        />

        {/* Foto Perfil */}
        <ProfileImage card={card} handleChange={handleChange} />

        {/* Select local e logo */}
        <Place card={card} index={index} handleChangeMap={handleChangeMap} handleChangeLogo={handleChangeLogo} />
      </div>
    );
  }
}

export default Card;
