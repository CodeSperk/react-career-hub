import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <Header></Header>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
