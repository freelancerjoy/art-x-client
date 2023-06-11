import React, { useEffect, useState } from "react";

const Allusers = () => {
  const [users, setUsers] = useState();
  const [relode, setrelode] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [relode]);

  const handleUserPermission = (_id, role) => {
    fetch(`http://localhost:5000/updateuser/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role: role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setrelode(!false);
      });
  };
  console.log(users);
  console.log(relode);
  return (
    <div>
      <h1 className="font-bold text-blue-600 text-4xl">
        All user Active {users?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td
                  className={`${user?.role === "admin" && "text-green-600"} ${
                    user?.role === "instractor" && "text-orange-600"
                  }`}>
                  {user?.role}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleUserPermission(user?._id, "instractor")
                    }
                    disabled={user?.role === "instractor" && true}
                    className="btn btn-sm bg-orange-600 text-white">
                    Make Instractor
                  </button>
                  <button
                    onClick={() => handleUserPermission(user?._id, "admin")}
                    disabled={user?.role === "admin" && true}
                    className="btn btn-sm bg-green-600 text-white pr-3">
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
