import { Outlet } from "react-router";

import Header from "../components/header/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
