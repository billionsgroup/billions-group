import React from "react";

const DivisionOfGroup = () => {
  const DIVISIONlIST = [
    {
      name: "Billions Fashion Ltd.",
    },
    {
      name: "Billions Printing Ltd.",
    },
    {
      name: "Billions Embroidery Ltd.",
    },
    {
      name: "Billions Dreams Ltd.",
    },
    {
      name: "Billions Organic Ltd.",
    },
    {
      name: "Billions Food Ltd.",
    },
    {
      name: "Billions Hometex Ltd.",
    },
    {
      name: "Billions TextIles Ltd.",
    },
    {
      name: "Billions Real estate Ltd.",
    },
    {
      name: "Billions Properties Ltd.",
    },
    {
      name: "Billions Developers Ltd.",
    },
    {
      name: "Billions Engineering Ltd.",
    },
    {
      name: "Billions Solar System Ltd.",
    },
    {
      name: "Billions Electronics Ltd.",
    },
    {
      name: "Billions Uniform Ltd.",
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto p-5 py-10 overflow-hidden">
      <div>
        <h2 className="text-2xl text-center mb-5">
          Divisions of Billions Group
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {DIVISIONlIST.map((division) => (
            <div
              key={division.name}
              className="from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r text-black  p-5 rounded-md"
            >
              <h5 className="text-center">{division.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivisionOfGroup;
