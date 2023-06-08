import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <div className="pt-20 min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
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
                  className="p-2 pl-4 border-2 rounded-full border-blue-500"
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
                  className="p-2 pl-4 border-2 rounded-full border-blue-500"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    If you have Account <span>PLease login</span>
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-500 text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
