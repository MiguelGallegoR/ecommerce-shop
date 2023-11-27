export async function getAllProducts() {
  const url = "http://localhost:1234/products?gender=";
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default getAllProducts;
