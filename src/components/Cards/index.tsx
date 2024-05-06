import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";

import "./index.css";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-950 dark:bg-gray-100 dark:text-white light:text-black">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8"
        data-aos="zoom-in"
      >
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-yellow-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2
            data-testid="single-user"
            className="text-2xl font-bold text-center py-8"
            data-aos="fade-up"
          >
            Single User
          </h2>
          <p className="text-center text-4xl font-bold">Free</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button
            className="bg-gray-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black duration-300"
            data-testid="single-button"
          >
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-yellow-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2
            className="text-2xl font-bold text-center py-8"
            data-testid="double-user"
            data-aos="fade-up"
          >
            Double User
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button
            className="bg-gray-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black duration-300"
            data-testid="double-button"
          >
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-yellow-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2
            className="text-2xl font-bold text-center py-8"
            data-testid="triple-user"
            data-aos="fade-up"
          >
            Triple User
          </h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button
            className="bg-gray-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black duration-300"
            data-testid="triple-button"
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
