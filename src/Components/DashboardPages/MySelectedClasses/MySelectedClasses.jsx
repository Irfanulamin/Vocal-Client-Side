import React from "react";
import useCart from "../../../hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [cart, refetch, error] = useCart();

  const amount = cart.reduce(
    (sum, classDetails) => sum + classDetails.class_price,
    0
  );

  const totalPrice = parseFloat(amount.toFixed(2));

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/selectedItems/${id}`)
          .then((response) => {
            if (response.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };
  return (
    <div className="w-full p-12">
      <h2 className="text-4xl text-center font-semibold text-black py-7 border border-black bg-yellow-600">
        My Cart
      </h2>
      {cart.length === 0 ? (
        <>
          <p className="text-center p-36">(The Cart is Empty)</p>
        </>
      ) : (
        <>
          <div className="overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th className="text-lg font-semibold  text-black">
                    Class Name
                  </th>
                  <th className="text-lg font-semibold  text-black">
                    Instructor
                  </th>
                  <th className="text-lg font-semibold  text-black">
                    Class Price
                  </th>
                  <th className="text-lg font-semibold  text-black">
                    Available Seats
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.reverse().map((classDetails, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask  w-24 h-24 border border-black">
                          <img src={classDetails?.class_image} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-lg font-semibold">
                        {classDetails?.class_name}
                      </span>
                    </td>
                    <td>
                      <span className="text-lg font-semibold">
                        {classDetails?.instructor_name}
                      </span>
                    </td>
                    <td>
                      <span className="text-lg font-semibold text-green-600">
                        {classDetails?.class_price} $
                      </span>
                    </td>
                    <td>
                      <span className="text-lg font-semibold text-green-600">
                        {classDetails?.available_seats}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(classDetails?._id)}
                        className="btn btn-xs border-none bg-red-600 hover:bg-white hover:text-red-600 text-white font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="border-2 border-black" />
          <div className="p-4 flex justify-end w-full">
            <div>
              <p className="text-lg font-semibold">
                Total Price:
                <span className="text-green-600"> {totalPrice}$</span>
              </p>
            </div>
          </div>
          <div className="flex justify-end ">
            <div>
              <Link
                to="/dashboard/payment"
                className="bg-black w-full px-7 text-white font-semibold text-lg py-1 rounded hover:bg-white hover:text-black transition-all"
              >
                Pay
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MySelectedClasses;
