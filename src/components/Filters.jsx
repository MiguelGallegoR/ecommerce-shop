import React, { useEffect, useState } from "react";
import { Button, InputNumber, Select, Space, Checkbox, Form } from "antd";
import { useParams } from "react-router-dom";
import { useGroupProducts } from "../hooks/useGroupProducts";
import { formatNumber } from "../helpers/helpers";
import { SearchOutlined } from "@ant-design/icons";
import getFilterProducts from "../services/filterProducts";
import { useQueryClient, useQuery } from "@tanstack/react-query";

import "../styles/Group.css";
export function Filters({ filters, setFilters }) {
  const sizeOptions = [
    {
      value: "XXL",
      label: "XXL",
    },
    {
      value: "XL",
      label: "XL",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "S",
      label: "S",
    },
    {
      value: "XS",
      label: "XS",
    },
  ];
  const queryClient = useQueryClient();
  const { gender, category, group } = useParams();

  const { isPending, isError, allGroupProductsByGender } = useGroupProducts({
    group,
    gender,
    setFilters,
  });

  const { refetch, data: allFilterProducts } = useQuery({
    queryKey: [
      "filterProducts",
      group,
      filters.price,
      filters.size,
      filters.discount
    ],
    queryFn: async () => {
      return await getFilterProducts( group, filters.price, filters.size, filters.discount );
     
    },
    refetchOnWindowFocus: false,
    enabled: false, //disable the query:
    //this is how we keep it from running on component mount.
  });

  const handleClick = () => {
    setFilters((prev) => ({ ...prev, active: !prev.active }));
  };

  useEffect(() => {
    console.log("VALOR DE FILTERS", filters);
    if(filters.searchWasMade){
      refetch()
    }
  }, [filters]);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, products: allFilterProducts }));
  }, [allFilterProducts]);
  const handleSubmit = async (formValues) => {
    setFilters((prev) => ({
      ...prev,
      ...formValues,
      discount: formValues.discount ? 1 : 0,
      searchWasMade: true
    }));
    
  };

  const handleClearFilters = () => {
    setFilters((prev) => ({
      ...prev,
      size: null,
      price: null,
      discount: null,
      active: false,
      searchWasMade: false,
      products: allGroupProductsByGender,
    }));
  }

  useEffect(() => {
    if(!filters.active){
      setFilters((prev) => ({ ...prev, products: allGroupProductsByGender }));
    }
  }, [filters.active])
  return (
    <div className="filters-container">
      <Button onClick={handleClick} className="filters-button">
        FILTERS
      </Button>
      {filters.active && (
        <Form className="filters-subcontainer" onFinish={handleSubmit}>
          <Form.Item label="size" rules={[{ required: false }]} name="size">
            <Select
              mode="tags"
              placeholder="Select Size"
              options={sizeOptions}
            />
          </Form.Item>
          <Space style={{ gap: "1.5em" }}>
            <Form.Item
              label="Max price"
              rules={[{ required: false }]}
              name="price"
            >
              <InputNumber
                formatter={formatNumber}
                min={0}
                max={500}
                className="filters-input"
              />
            </Form.Item>
          </Space>

          <Form.Item name="discount" valuePropName="checked">
            <Checkbox className="filters-checkbox">On Discount</Checkbox>
          </Form.Item>

          <Button onClick={handleClearFilters}>Clear</Button>

          <Button icon={<SearchOutlined />} htmlType="submit" />
        </Form>
      )}
    </div>
  );
}
