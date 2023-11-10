import { Header } from "./components/Header";
import "antd";
import "./App.css";
import { CategoryBreadcrumb } from "./components/Category-Breadcrumb";
import { Outlet } from "react-router-dom";

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
