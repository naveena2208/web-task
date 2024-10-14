import React from "react";

const Menu = (props) => {
  function onClickedMenu() {
    props.handleClick(props.menu.name);
  }

  return (
    <menu
      className={props.menu.isSelected ? "selected menu" : "menu"}
      onClick={onClickedMenu}
    >
      <img src={props.menu.icon} />
      <h3>{props.menu.name}</h3>
    </menu>
  );
};

export default Menu;
