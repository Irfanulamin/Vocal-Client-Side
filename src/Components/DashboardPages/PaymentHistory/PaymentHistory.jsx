import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(
      `https://server-side-sand-omega.vercel.app/payments?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const reversedClasses = [...classes].reverse();
  return (
    <div className="p-12 bg-yellow-100 mt-16">
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-lg font-semibold">Transaction ID</th>
            <th className="py-2 px-4 text-lg font-semibold">Email</th>
            <th className="py-2 px-4 text-lg font-semibold">Total Price</th>
            <th className="py-2 px-4 text-lg font-semibold">Order Date</th>
          </tr>
          <hr className="border-black border" />
        </thead>
        <tbody>
          {reversedClasses.map((classDetails) => (
            <tr key={classDetails._id}>
              <td className="py-2 px-4 font-semibold text-green-600">
                {classDetails.transactionID}
              </td>
              <td className="py-2 px-4 font-semibold">{classDetails.email}</td>
              <td className="py-2 px-4 font-semibold text-red-600">
                {classDetails.totalPrice}$
              </td>
              <td className="py-2 px-4  font-semibold">{classDetails.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
