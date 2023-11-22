import { Header } from "./components/Header";
import "antd";
import "./App.css";
import { Outlet } from "react-router-dom";
import CategoryBreadcrumb from "./components/Category-Breadcrumb";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <CategoryBreadcrumb />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
