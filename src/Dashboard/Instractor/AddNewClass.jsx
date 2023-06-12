import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const AddNewClass = () => {
  const { user } = useContext(AuthContest);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const course = {
      name: data?.classname,
      instractorname: data?.instractorname,
      availablesit: data?.availablesit,
      email: data?.email,
      price: data?.price,
      photo: data?.photo,
      status: "pending",
      enrolled: 0,
      feedback: null,
      select: null,
    };
    fetch("https://art-x-server.vercel.app/addclass", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(course),
    });
  };

  return (
    <div>
      <div className="min-h-screen w-full bg-base-200">
        <div className="hero-content ">
          <div className="card w-full shadow-2xl bg-blue-50">
            <h1 className="font-bold text-2xl mt-5 text-center">
              Add your new class
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className=" grid grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Name</span>
                  </label>
                  <input
                    {...register("classname", { required: true })}
                    type="name"
                    placeholder="Class Name"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Image</span>
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    type="url"
                    placeholder="Class Image"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instractor Name</span>
                  </label>
                  <input
                    {...register("instractorname", {
                      required: true,
                      maxLength: 20,
                    })}
                    type="name"
                    readOnly
                    defaultValue={user?.displayName}
                    placeholder="Instractor Name"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Sit</span>
                  </label>
                  <input
                    {...register("availablesit", {
                      required: true,
                    })}
                    type="number"
                    placeholder="Available Sit"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                    placeholder="email"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Price</span>
                  </label>
                  <input
                    {...register("price", {
                      required: true,
                    })}
                    type="number"
                    placeholder="Course Price"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-500 text-white">
                  Add a class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewClass;
