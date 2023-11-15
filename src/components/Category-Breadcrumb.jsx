import React from "react";
import { Breadcrumb } from "antd";
import { useParams, useLocation, Link } from "react-router-dom";
import { router } from "../main";
export const CategoryBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  return (
    <>
      {pathSnippets.map((snippet, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb key={url} items={[{ title: <Link to={url}>{snippet}</Link> }]}
            separator="->"
          />
        );
      })}
    </>
    
  )
};
export default CategoryBreadcrumb;
