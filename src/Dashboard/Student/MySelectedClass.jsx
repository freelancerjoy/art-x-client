import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MySelectedClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  });
  console.log(classes)
  return <div></div>;
};

export default MySelectedClass;
