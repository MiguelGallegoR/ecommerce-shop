export async function getAllGroupProducts({group, pageParam, price, size, discount} ) {
   // Si price, size o discount son undefined, se asigna un valor por defecto
   const priceParam = price !== undefined  ? `price=${price}` : "";

   const sizeParam = size ? size.map((s) => `size=${s}`).join("&") : "";

   const discountParam = discount !== undefined ? `discount=${discount}` : "";

  const url = `http://localhost:1234/products/byGroup?group=${group}&${priceParam}&${sizeParam}&${discountParam}&page=${pageParam}`;
  const response = await fetch(url);
  const data =  await response.json();
  const nextCursor = Number(data.page) + 1;
  return { products: data.resultProducts, nextCursor: nextCursor }
}
export default getAllGroupProducts;
