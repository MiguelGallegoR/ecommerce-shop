import { Header } from "./components/Header";
import "antd";
import "./App.css";
import { Outlet } from "react-router-dom";
import CategoryBreadcrumb from "./components/Category-Breadcrumb";
function App() {
  return (
    <>
      <Header />
      <CategoryBreadcrumb />
      <Outlet />
    </>
  );
}

export default App;
