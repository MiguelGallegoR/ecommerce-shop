import { Header } from "./components/Header";
import "antd";
import "./App.css";
import { CategoryBreadcrumb } from "./components/Category-Breadcrumb";
import { Outlet } from "react-router-dom";
import { getAllProducts } from "./services/allProducts";
export async function loader() {
  const products = await getAllProducts();
  return {products}
}
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
