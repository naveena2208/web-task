import React, { useContext } from "react";
import Card from "./Card";
import { MyContext } from "./MyContext";

const InfoSection = () => {
  const { property, financeData } = useContext(MyContext);
  const [properties, setProperties] = property;
  const [finance, setFinance] = financeData;

  function calcVacency() {
    let result = 0;
    properties.map((data) => {
      result += data.vacent_units;
    });
    return result;
  }

  function calcOccupany() {
    let result = 0;
    properties.map((data) => {
      result += data.occupany_rate;
    });
    return result;
  }

  function calcProfit() {
    let result = 0;
    finance.map((data) => {
      result += data.net_profit;
    });
    return result;
  }

  return (
    <section className="info">
      <h2>Dashboard</h2>
      <div style={{ display: "flex" }}>
        <Card
          text="Number of Properties"
          value={properties.length}
          subText="about properties"
          color="blue"
          bgColor="lightblue"
        />
        <Card
          text="Average Vacency Rate"
          value={calcVacency()}
          subText="about vacency rate"
          color="green"
          bgColor="lightgreen"
        />
        <Card
          text="Average Occupancy Rate"
          value={calcOccupany()}
          subText="about occupancy rate"
          color="yellow"
          bgColor="lightyellow"
        />
        <Card
          text="Overall Net Profit"
          value={calcProfit()}
          subText="about net profit"
          color="orange"
          bgColor="lightpink"
        />
      </div>
    </section>
  );
};

export default InfoSection;
