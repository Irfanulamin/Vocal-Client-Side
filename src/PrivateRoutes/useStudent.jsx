import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/student/${user?.email}`);
      return res.data.student;
    },
  });
  return [isStudent, isStudentLoading];
};

export default useStudent;
