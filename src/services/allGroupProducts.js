export async function getAllGroupProducts({group, page, price, size, discount, gender} ) {
   // Si price, size o discount son undefined, se asigna un valor por defecto
   const priceParam = price !== undefined  ? `price=${price}` : "";

   const sizeParam = size ? size.map((s) => `size=${s}`).join("&") : "";

   const discountParam = discount !== undefined ? `discount=${discount}` : "";

   const genderParam = gender ? `gender=${gender}` : "";
  const url = `http://localhost:1234/products/byGroup?group=${group}&${genderParam}&${priceParam}&${sizeParam}&${discountParam}&page=${page}&pageSize=6`;
  const response = await fetch(url);
  const data =  await response.json();
  return data
}
export default getAllGroupProducts;
