import "./index.css";
import Single from "../../assets/single.png";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [userpass, setUserpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [isValid, setValid] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (userpass !== confirmpass) {
      window.alert("Password and Confirm password do not match");
      return;
    }
    console.log(username);
    console.log(userpass);
    console.log(confirmpass);
  };
  const handlePassChange = (event: any) => {
    let pass = event.target.value;
    setUserpass(pass);
    if (pass.length >= 8 && username.length >= 8 && pass === confirmpass) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const handleUsernameChange = (event: any) => {
    let user = event.target.value;
    setUsername(user);
    if (user.length >= 8 && userpass.length >= 8) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const handleConfirmPassChange = (event: any) => {
    let confirmpass = event.target.value;
    setConfirmpass(confirmpass);
    if (
      confirmpass.length >= 8 &&
      userpass.length >= 8 &&
      userpass === confirmpass
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  return (
    <div className="px-32 py-5 h-screen overflow-y-hidden bg-slate-200">
      <div className="navbar pt-3 flex items-center justify-between px-5">
        <div className="text-black text-3xl font-bold cursor-pointer">
          <span className="text-blue-400 font-extrabold text-4xl">Pỏn</span>
          Húp
        </div>
        <div>
          <p className="font-bold text-xl">
            Already have account?{" "}
            <span className="pl-1 text-blue-400 cursor-pointer">
              <Link className="text-blue-400" to="/login">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="hero-section flex items-center justify-evenly h-full">
        <div className="hero-right flex-1">
          <img className="w-screen" src={Single} alt="" />
        </div>
        <div className="hero-left flex-1 flex justify-center items-center">
          <div className="border-4 border-blue-400 p-14 rouded-md shadow-slate-700 shadow-2xl">
            <div className="mb-10 text-center">
              <h2 className="text-black text-3xl font-bold">Welcome!</h2>
              <p className="text-black text-opacity-70 font-bold text-xl">
                Signup to continue
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-md border-blue-400">
                <FaUser className="text-blue-400 text-2xl" />
                <input
                  id="username"
                  className="outline-none w-full px-5"
                  type="text"
                  placeholder="Ex: abc@gmail.com"
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-md border-blue-400">
                <FaLock className="text-blue-400 text-2xl" />
                <input
                  id="password"
                  className="outline-none w-full px-5"
                  type="password"
                  placeholder="Enter the password"
                  onChange={handlePassChange}
                />
              </div>
              <div className="flex items-center mb-10 bg-white p-5 border-2 rounded-md border-blue-400">
                <FaLock className="text-blue-400 text-2xl" />
                <input
                  id="confirm_password"
                  className="outline-none w-full px-5"
                  type="password"
                  placeholder="Confirm password"
                  onChange={handleConfirmPassChange}
                />
              </div>
            </form>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-full px-8 py-3 rounded-lg font-bold ${
                  isValid ? " bg-blue-500 hover:bg-blue-400" : "bg-gray-400"
                } duration-300 mb-5`}
                disabled={!isValid}
              >
                SIGNUP
              </button>
            </div>
            <div className="flex gap-10 items-center justify-center mt-10">
              <FaFacebook className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
              <FaGoogle className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
