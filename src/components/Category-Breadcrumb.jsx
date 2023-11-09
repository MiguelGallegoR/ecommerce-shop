import React from "react";
import { Breadcrumb } from "antd";
import { categories } from "../mock/categories.js";
import {useParams} from "react-router-dom";

export const CategoryBreadcrumb = () => {
  const {gender} = useParams();
  return (
    <>
      <Breadcrumb
        separator="->"
        items={[
          {
            title: gender
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
export default CategoryBreadcrumb;
