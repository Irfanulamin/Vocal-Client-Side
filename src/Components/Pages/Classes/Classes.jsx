import React, { useContext, useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);

  const handleSelect = (id) => {
    console.log(id);
    if (user && user?.email) {
      const selectedClass = classes.find(
        (classDetails) => classDetails?._id === id
      );

      const {
        _id,
        email,
        class_name,
        class_image,
        class_price,
        available_seats,
        students,
        instructor_name,
      } = selectedClass;

      const item = {
        classID: _id,
        email: email,
        class_image: class_image,
        class_name: class_name,
        class_price: class_price,
        available_seats: available_seats,
        students: students,
        instructor_name: instructor_name,
        userEmail: user?.email,
      };
      console.log(item);

      axios
        .post("http://localhost:5000/selectedItems", item)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "",
              text: "Added To Cart!",
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Swal.fire(
        "Please Login, Before adding to cart",
        "Login, Now.To Enroll your Fav Classes",
        "question"
      );
      navigate("/login");
    }
  };

  return (
    <>
      {classes.length === 0 && (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-20">
        {classes.map((classDetails) => (
          <ClassCard
            classDetails={classDetails}
            handleSelect={handleSelect}
          ></ClassCard>
        ))}
      </div>
    </>
  );
};

export default Classes;
