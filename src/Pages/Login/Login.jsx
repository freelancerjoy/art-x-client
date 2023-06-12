import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContest } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContest);
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data?.email, data?.password).then((result) => {
      const user = result.user;
      navigate(from);
    });
  };

  const handleGoolge = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
      const saveUserDatabase = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        role: "student",
      };
      console.log(user?.photoURL);
      navigate(from);
      fetch("https://art-x-server.vercel.app/users", {
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
              Please Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="emial"
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
                  type={!showPassword ? "password" : "text"}
                  placeholder="password"
                  className="p-2 pl-4 border rounded-full border-blue-500"
                />
                <button
                  className="-mt-7 ml-72 text-lg"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <BsEyeSlashFill></BsEyeSlashFill>
                  ) : (
                    <BsEyeFill></BsEyeFill>
                  )}
                </button>
                <label className="label mt-5">
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
                  Login
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

export default Login;
