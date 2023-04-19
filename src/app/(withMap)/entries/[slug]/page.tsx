"use client";

import React from "react";
import data from "../../../api/dataMock.json";

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
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        paddingInline: "2rem",
        paddingBlock: "2rem",
      }}
    >
      <div onClick={handleToggle} className="handle">
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#011638" }}>
          {entryData.name}
        </h1>
        <p
          style={{
            fontSize: "16px",
            paddingBlock: "0.5rem",
            color: "#011638",
            paddingInlineStart: "0.5rem",
          }}
        >
          {entryData.description}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#011638",
            paddingBlock: "0.5rem",
            paddingInlineStart: "0.5rem",
          }}
        >
          {entryData.address}
        </p>
      </div>

      <button style={{position: 'absolute', top: '5px', right: '10px', color: 'black'}}> x </button>
    </div>
  );
};

export default Entries;
