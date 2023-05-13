"use client";

import React from "react";
import data from "../../../api/dataMock.json";
import Card from "../../../../components/card/Card";

const Entries = ({ params }) => {
  const [open, setOpen] = React.useState(false);
  const slug = params.slug;

  const entryData = data.entries.find((entry) => entry.slug === slug);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`drawer ${open ? "open" : ""}`}
      style={{
        backgroundColor: "#EEF0F2",
        height: "auto",
        borderRadius: "20px",
        paddingInline: "2rem",
        paddingBlock: "2.2rem",
        left: "50%",
        width: "95%",
        transform: "translateX(-50%)",
        marginBottom: "0.5rem",
      }}
    >
      <div onClick={handleToggle} className="handle">
        <Card data={entryData} />
      </div>
    </div>
  );
};

export default Entries;
