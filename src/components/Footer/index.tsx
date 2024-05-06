import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

import { ReactTyped } from "react-typed";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./index.css";

export const Footer = () => {
  const subscribeFunc = () => {
    window.alert("Thanks for your subscribe");
  };
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube, link: "/youtube" },
    { label: "Instagram", icon: FaInstagram, link: "/instagram" },
    { label: "Twitter", icon: FaXTwitter, link: "/twitter" },
    { label: "Facebook", icon: FaFacebook, link: "/facebook" },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1", link: "/about" },
      { label: "Contact us", key: "item-1-3", link: "/contact" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1", link: "/help" },
      { label: "Terms of service", key: "item-2-2", link: "/termsofservice" },
      { label: "Legal", key: "item-2-3", link: "/legal" },
      { label: "Privacy policy", key: "item-2-4", link: "/policy" },
    ],
  ];

  return (
    <div className="app flex items-end justify-center font-poppins">
      <div className="py-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-black text-pink-300 w-full p-4 relative">
        <div className="  ">
          <div className="footer-img flex items-center">
            <img src={Logo} alt="" className="w-16 h-auto" />
            <span className="text-3xl font-bold pl-2">PỏnTube</span>
          </div>
          <div className="infos">
            <span>Copyright © 2024 PỏnHúp ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <div key={index}>
                  <Link to={socialLink.link}>
                    <Icon
                      key={`footer-social-${index}`}
                      className="w-14 h-14 p-2 rounded-full bg-black hover:bg-white hover:text-pink-300 cursor-pointer"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`footer-link-${col}-${index}`}
                      className={` cursor-pointer ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl"
                          : ""
                      }`}
                    >
                      {link.key === "header-1" || link.key === "header-2" ? (
                        <>{link.label}</>
                      ) : (
                        <div>
                          <Link to={`${link.link}`}>{link.label}</Link>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col">
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Wanna Pỏn?", "Wanna Sẽ?"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <form>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Subscribe to our page"
                className="mt-2 w-full rounded-lg py-3 px-6 bg-black outline-dashed"
              />
              <button
                className="px-6 py-2 text-black rounded-full bg-pink-300 hover:bg-gray-500 focus:outline-none"
                onClick={subscribeFunc}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
