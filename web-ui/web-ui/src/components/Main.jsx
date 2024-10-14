import React, { useEffect, useState } from "react";
import InfoSection from "./InfoSection";
import PropertySection from "./PropertySection";
import { MyContext } from "./MyContext";
import FinanceOverview from "./FinanceOverview";

const Main = () => {
  const [properties, setProperties] = useState([]);
  const [finance, setFinance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getApiData() {
    const response = await fetch("http://localhost:8088/properties");
    const data = await response.json();
    setProperties(data);
    const response1 = await fetch("http://localhost:8088/finance");
    const data1 = await response1.json();
    setFinance(data1);
    setIsLoading(false);
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        property: [properties, setProperties],
        financeData: [finance, setFinance],
      }}
    >
      <main className="main">
        {!isLoading && (
          <div>
            <InfoSection />
            <PropertySection />
            <FinanceOverview />
          </div>
        )}
      </main>
    </MyContext.Provider>
  );
};

export default Main;
