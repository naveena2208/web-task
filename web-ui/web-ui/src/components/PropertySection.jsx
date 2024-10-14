import React, { useContext, useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import ShowData from "./ShowData";
import { MyContext } from "./MyContext";

const PropertySection = () => {
  const { property, finance } = useContext(MyContext);
  const [properties, setProperties] = property;

  return (
    <section className="property">
      <HeaderSection
        text="Property Occupancy Overview"
        subText="Detailed Occupancy breakdown"
      />
      <ShowData data={properties} />
    </section>
  );
};

export default PropertySection;
