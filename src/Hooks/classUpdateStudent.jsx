import { useEffect } from "react";
import { useState } from "react";

const classUpdateStudent = () => {
  const [allClasses, setAllClass] = useState();
  useEffect(() => {
    fetch(`https://art-x-server.vercel.app/allclasses`)
      .then((res) => res.json())
      .then((data) => setAllClass(data));
  });

  console.log(allClasses);
  return { allClasses };
};
export default classUpdateStudent;
