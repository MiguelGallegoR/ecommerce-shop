import React, {useState, useEffect} from "react";
import { Filters } from "./Filters";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
import { useGroupProducts } from "../hooks/useGroupProducts";
const { Meta } = Card;

export default function FilteredListOfProducts({gender, group, filters, search, setSearch}) {
  const [page, setPage] = useState(1);

  const {
    allGroupProducts,
    isPlaceholderData,
    isFetching,
    totalPages
  } = useGroupProducts({
    group,
    gender,
    price: filters.price,
    size: filters.size,
    discount: filters.discount,
    search: search,
    page: page,
  });


  useEffect(() => {
    console.log("actual page", page)
  }, [page])

  useEffect(() => {
    console.log("search->", search)
  }, [search])


  // Si cambia el valor de filters pon search a false para
  // que al darle a la lupa vuelva a buscar
  useEffect(() => {
    if (search && allGroupProducts?.length > 0) {

      setPage(1);
    }
  }, [filters]);
  return (
    <div className="list-of-products-container">
    
        <ul className="list-of-products">
          { allGroupProducts &&
            allGroupProducts.map((product) => (
              <li key={product._id} className="product">
                <Link to={`/products/${product._id}`} className="product-link">
                  <Card
                    hoverable
                    className="product-card"
                    cover={
                      <img
                        alt="example"
                        src={`${import.meta.env.VITE_URL_PREFIX}${
                          product.photo
                        }`}
                        className="product-image"
                      />
                    }
                  >
                    <Meta
                      title={product.name}
                      description={`${product.price}€`}
                    />
                  </Card>
                </Link>
              </li>
            ))}
        </ul>
        <span>Current Page: {page}</span>
      <button
        onClick={() => setPage(prev => prev - 1)}
        disabled={page === 1}
      >
        Previous Page
      </button>


      <button
        onClick={() => {
          
            setPage(prev => prev + 1);
            console.log("page boton-> ", page);
            console.log("totalPages-> ", totalPages)
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={page === totalPages  || totalPages === 0}
      >
        Next Page
      </button>
    </div>
  );
}
