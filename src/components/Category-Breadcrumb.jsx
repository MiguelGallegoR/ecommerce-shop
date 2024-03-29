import React from "react";
import { Breadcrumb } from "antd";
import { useParams, useLocation, Link } from "react-router-dom";
import { router } from "../main";
export const CategoryBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const linksBreadCrumb = (pathSnippets) => {
    return pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      
      if(index !== pathSnippets.length - 1){
        return [{title: <Link to={url} key={crypto.randomUUID()}>{snippet.toUpperCase()}</Link>},
        {
          type: 'separator',
          separator: '->',
        }]
      }
      return [{title: <Link to={url} className="last-link" key={crypto.randomUUID()}>{snippet.toUpperCase()}</Link>}]
    });
  };

  const result = linksBreadCrumb(pathSnippets).flat();
  
  return (
    <div className="breadcrumb-container">
      <Breadcrumb separator="" items={result} />
    </div>
  );
};
export default CategoryBreadcrumb;
