import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import useAdmin from "../../Hooks/useAdmin";
import useInstractor from "../../Hooks/useInstractor";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import { ScaleLoader } from "react-spinners";
import { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import Lodder from "../../Components/Lodder";

const Classes = () => {
  const [allClass, setAllClass] = useState([]);
  const [isAdmin] = useAdmin();
  const [isInstractor] = useInstractor();
  const [axiosSecure] = useAxios();
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    axiosSecure("allclasses").then((response) => {
      setAllClass(response.data);
      setLoading(false);
    });
  }, []);
  const approved = allClass?.filter((approve) => approve.status == "approved");

  return (
    <div className="w-11/12 mx-auto pt-20 pb-10">
      <h1 className="text-blue-600 font-bold text-2xl my-5">
        All Active Class : {approved?.length}
      </h1>
      <div
        className={`${
          loading ? "" : "grid grid-cols-1 lg:grid-cols-3 gap-5"
        } `}>
        {loading ? (
          <Lodder></Lodder>
        ) : (
          approved?.map((approveClass) => (
            <ClassCard
              key={approveClass?._id}
              approveClass={approveClass}
              isAdmin={isAdmin}
              isInstractor={isInstractor}></ClassCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Classes;
