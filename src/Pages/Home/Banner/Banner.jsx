import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Banner.css";
import slider2 from "../../../assets/Slider/slide2.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <AwesomeSlider className="aws-btn" bullets={false}>
      <div data-src={slider2}>
        <div className="absolute top-52 left-28 space-y-4 hidden lg:block">
          <p className=" font-bold text-5xl text-blue-600">Children.</p>
          <p className=" font-bold text-lg lg:text-5xl text-blue-600">
            Art & craft School.
          </p>
          <p className="text-slate-700 ">
            Children's Academy will provide a stimulating and <br /> safe
            environment for children ages three month
          </p>
          <Link className="btn  rounded-tl-full rounded-br-full px-14 bg-blue-600 text-white">
            Login
          </Link>
        </div>
      </div>
      <div data-src={slider2}>
        <div className="absolute top-52 left-28 space-y-4 hidden lg:block">
          <p className=" font-bold text-5xl text-blue-600">Children.</p>
          <p className=" font-bold text-4xl text-blue-600">
            Art & craft School.
          </p>
          <p className="text-slate-700">
            Children's Academy will provide a stimulating and <br /> safe
            environment for children ages three month
          </p>
          <Link className="btn  rounded-tl-full rounded-br-full px-14 bg-blue-600 text-white">
            Login
          </Link>
        </div>
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
