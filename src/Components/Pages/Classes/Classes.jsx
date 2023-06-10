import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("/instructors.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-20">
      {classes.map((classDetails) => (
        <ClassCard classDetails={classDetails}></ClassCard>
      ))}
    </div>
  );
};

export default Classes;
