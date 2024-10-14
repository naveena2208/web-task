import React, { useContext, useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import ShowData from "./ShowData";
import { MyContext } from "./MyContext";

const FinanceOverview = () => {
  const { property, financeData } = useContext(MyContext);
  const [finance, setFinance] = financeData;

  return (
    <section className="property">
      <HeaderSection
        text="Finance Overview"
        subText="Detailed Finance breakdown"
      />
      <ShowData data={finance} />
    </section>
  );
};

export default FinanceOverview;
