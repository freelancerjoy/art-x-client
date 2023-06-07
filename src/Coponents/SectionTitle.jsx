import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="space-y-1 text-center my-12">
      <h1 className="text-4xl font-bold text-blue-600">{heading}</h1>
      <h3 className="text-2xlxl text-slate-700">{subHeading}</h3>
    </div>
  );
};

export default SectionTitle;
