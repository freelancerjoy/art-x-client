import React, { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import SelectedClassRow from "./SelectedClassRow";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { HashLoader } from "react-spinners";

const MySelectedClass = () => {
  const { user, loading } = useContext(AuthContest);

  const [axiosSecure] = useAxios();

  const { refetch, data: selectedClasses = [] } = useQuery(
    {
      queryKey: ["selectclass"],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/selectclass?email=${user?.email}`);
        console.log("res from axios", res);
        return res.data;
      },
    },
    [user]
  );
  return (
    <div>
      <div className="w-11/12 mx-auto ">
        <div className=" overflow-x-auto">
          <table className="table min-w-screen">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  {/* Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}
                </th>
                <th>Image</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Available seats</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses ? (
                selectedClasses?.map((singleClass) => (
                  <SelectedClassRow
                    key={singleClass._id}
                    singleClass={singleClass}
                    refetch={refetch}></SelectedClassRow>
                ))
              ) : (
                <HashLoader color="#36d7b7" />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClass;
