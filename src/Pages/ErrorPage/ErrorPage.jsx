import React from "react";

import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="text-center max-w-md mx-auto py-12">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1686586763~exp=1686587363~hmac=df7efaca790f1b5855968a69e6fcbfe42a1ad3553bd6aa48ccfc62725669d0b2"
          alt=""
        />
        <h1 className="text-2xl mt-10 font-bold text-rose-600">
          {error?.error?.message}
        </h1>
        <div>
          <button className="btn btn-sm border-0 mt-5 rounded-tl-full rounded-br-full px-8 bg-blue-400 text-white">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
