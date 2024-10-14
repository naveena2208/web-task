import React, { useReducer } from "react";
import {
  Create,
  Dashboard,
  List,
  Settings,
  Support,
} from "./../assets/index.js";
import Menu from "./Menu.jsx";

const Navigation = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECTED":
        return state.map((menu) => {
          if (menu.name == action.name) return { ...menu, isSelected: true };
          else return { ...menu, isSelected: false };
        });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, [
    {
      name: "Dashboard",
      icon: Dashboard,
      isSelected: false,
    },
    {
      name: "Create Portfolio",
      icon: Create,
      isSelected: false,
    },
    {
      name: "Property List",
      icon: List,
      isSelected: false,
    },
    {
      name: "Support",
      icon: Support,
      isSelected: false,
    },
    {
      name: "Settings",
      icon: Settings,
      isSelected: false,
    },
  ]);

  function selectedData(selectedData) {
    dispatch({ type: "SELECTED", name: selectedData });
  }

  return (
    <nav className="nav">
      {state.map((menu, index) => {
        return (
          <>
            {index == 0 && <h4>MAIN MENU</h4>}
            {index == 3 && <h4>OTHERS</h4>}
            <Menu menu={menu} handleClick={selectedData} />
          </>
        );
      })}
    </nav>
  );
};

export default Navigation;
