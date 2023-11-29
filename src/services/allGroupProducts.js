export async function getAllGroupProducts(group) {
  const url = `http://localhost:1234/products/byGroup?group=${group}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default getAllGroupProducts;
