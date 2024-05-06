import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "../../layout/PageHeader";
import Footer from "../Footer";

import "./index.css";

interface Props {
  children?: ReactNode;
}

const LayoutUser = ({ children }: Props) => {
  return (
    <div>
      <PageHeader />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutUser;
