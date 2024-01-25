import React, { useEffect, useRef, useState } from "react";
import { Button, InputNumber, Select, Space, Checkbox, Form } from "antd";
import { useParams } from "react-router-dom";
import { useGroupProducts } from "../hooks/useGroupProducts";
import { formatNumber } from "../helpers/helpers";
import { SearchOutlined } from "@ant-design/icons";
import getFilterProducts from "../services/filterProducts";
import { useQueryClient, useQuery } from "@tanstack/react-query";

import "../styles/Group.css";
import { useFilterProducts } from "../hooks/useFilterProducts";
export function Filters({ filters, setFilters, children }) {
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
  const { gender, group } = useParams();

  const [search, setSearch] = useState(false);

  const {
    isPending,
    isError,
    allGroupProductsByGender,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGroupProducts({
    group,
    gender,
    setFilters,
    price: filters.price,
    size: filters.size,
    discount: filters.discount,
    search: search,
  });

  let allFilterProducts;

  const handleClick = () => {
    setFilters((prev) => ({ ...prev, active: !prev.active }));
  };

  //Si cambia el valor de filters pon search a false para
  //que al darle a la lupa vuelva a buscar
  useEffect(() => {
    if (search && filters.products?.length > 0) {
      setSearch(false);
    }
  }, [filters]);

  useEffect(() => {
    handleSubmit({
      price: undefined,
      size: undefined,
      discount: undefined,
    });
  }, []);

  useEffect(() => {
    console.log("VALOR DE SEARCH", search);
  }, [search]);

  const handleSubmit = async (formValues) => {
    setFilters((prev) => ({
      ...prev,
      ...formValues,
      discount: formValues.discount ? 1 : 0,
    }));
    setSearch(true);
  };

  const handleClearFilters = () => {
    setFilters((prev) => ({
      ...prev,
      size: null,
      price: null,
      discount: null,
      active: false,
      products: allGroupProductsByGender,
    }));
    setSearch(false);
  };

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
      <div className="filters-subcontainer-list">
        {children}

        <Button
          onClick={async () => {
            await fetchNextPage();
          }}
          disabled={!hasNextPage || isFetchingNextPage}
          className="filters-button"
        >
          Load more
        </Button>
      </div>
    </div>
  );
}
