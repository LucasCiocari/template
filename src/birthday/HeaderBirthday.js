import React from "react";
import ReactHoverObserver from "react-hover-observer";
import classNames from "classnames";

class HeaderBirthday extends React.Component {
  state = {
    monthIsHovering: false
  };

  onHoverMonthChanged = ({ isHovering }) => {
    this.setState({
      monthIsHovering: isHovering
    });
  };

  render() {
    const { bdMonthText, handleBdMonthChange } = this.props;
    const { monthIsHovering } = this.state;
    return (
      <div className="confetti-top">
        <h1>PARABÉNS IBMISTAS!</h1>
        <ReactHoverObserver
          {...{
            onHoverChanged: this.onHoverMonthChanged
          }}
        >
          <input
            type="text"
            className={classNames("input-date-bd", {"month-hover" : monthIsHovering})}
            value={bdMonthText}
            placeholder="Digite o mês"
            onChange={event => {
              handleBdMonthChange(event.target.value);
            }}
          />
        </ReactHoverObserver>
      </div>
    );
  }
}

export default HeaderBirthday;
