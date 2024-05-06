import "./index.css";
import { PacmanLoader } from "react-spinners";
import { ReactTyped } from "react-typed";

function LoadingPage() {
  return (
    <>
      <div className="justify-center flex pt-20">
        <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          strings={["Loading...!"]}
          typeSpeed={20}
          backSpeed={200}
          loop
        />
      </div>
      <div className="flex justify-center pt-20">
        <PacmanLoader size={100} />
      </div>
    </>
  );
}

export default LoadingPage;
