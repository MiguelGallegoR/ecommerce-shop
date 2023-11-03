import React from "react";
import { Breadcrumb } from "antd";
import { categories } from "../mock/categories.js";
export const Category = () => {
  return (
    <>
      <Breadcrumb
        separator="->"
        items={[
          {
            title: categories[0].name
          },
          {
            title: categories[0].subcategories[0].name,
            href: "",
          },
          {
            title: categories[0].subcategories[0].groups[0].name,
            href: "",
          }
        ]}
      />
    </>
  );
};
export default Category;
