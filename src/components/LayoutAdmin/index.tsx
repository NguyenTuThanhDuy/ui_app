import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import "./index.css";

interface Props {
  children?: ReactNode;
}

const LayoutAdmin = ({ children }: Props) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <main className="flex-col w-full">
          <Header />
          {children}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
