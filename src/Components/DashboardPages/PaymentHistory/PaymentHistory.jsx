import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div className="py-12 px-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-lg font-semibold">Transaction ID</th>
            <th className="py-2 px-4 text-lg font-semibold">Email</th>
            <th className="py-2 px-4 text-lg font-semibold">Total Price</th>
            <th className="py-2 px-4 text-lg font-semibold">Order Date</th>
            <th className="py-2 px-4 text-lg font-semibold">Order Status</th>
            <th className="py-2 px-4 text-lg font-semibold">Quantity</th>
          </tr>
          <hr className="border-black border" />
        </thead>
        <tbody>
          {classes.reverse().map((classDetails) => (
            <tr key={classDetails._id}>
              <td className="py-2 px-4 font-semibold text-green-600">
                {classDetails.transactionID}
              </td>
              <td className="py-2 px-4 font-semibold">{classDetails.email}</td>
              <td className="py-2 px-4 font-semibold text-red-600">
                {classDetails.totalPrice}
              </td>
              <td className="py-2 px-4  font-semibold">{classDetails.date}</td>
              <td className="py-2 px-4 text-yellow-500 font-semibold">
                {classDetails.orderStatus}
              </td>
              <td className="py-2 px-4 font-semibold">
                {classDetails.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
