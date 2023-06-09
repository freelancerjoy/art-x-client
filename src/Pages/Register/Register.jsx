import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const Register = () => {
  const { userCreate, profileUpdate, googleSignIn } = useContext(AuthContest);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userCreate(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(user, data?.name, data?.photo);
        const saveUserDatabase = { name: data?.name, email: data?.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUserDatabase),
        }).then(((res) => res.json()).then((data) => console.log(data)));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoolge = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
      const saveUserDatabase = { name: user?.displayName, email: user?.email };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(saveUserDatabase),
      });
    });
  };

  return (
    <div>
      <div className="pt-20 min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="card w-full max-w-sm shadow-2xl bg-blue-50">
            <h1 className="font-bold text-2xl mt-5 text-center">
              Please Register
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="name"
                  placeholder="Type your Name"
                  className="p-2 pl-4 border rounded-full border-blue-500"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Type your email"
                  className="p-2 pl-4 border rounded-full border-blue-500"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true, maxLength: 20 })}
                  type="password"
                  placeholder="password"
                  className="p-2 pl-4 border rounded-full border-blue-500"
                />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: true,
                      maxLength: 20,
                    })}
                    type="password"
                    placeholder="confirm Password"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    {...register("photo", {
                      required: true,
                    })}
                    type="url"
                    placeholder="photo Url"
                    className="p-2 pl-4 border rounded-full border-blue-500"
                  />
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    If you Are New{" "}
                    <Link to="/register">
                      <span className="text-blue-600 underline">
                        PLease Register
                      </span>
                    </Link>
                  </a>
                </label>
              </div>

              <div className="form-control mt-2">
                <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-500 text-white">
                  Register
                </button>
              </div>
              <div className="divider"> or</div>
              <button
                onClick={handleGoolge}
                className="w-10 mx-auto h-10 flex items-center justify-center bg-white rounded-full border-2 border-blue-500">
                <FcGoogle className="text-3xl text-center p-1"></FcGoogle>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
