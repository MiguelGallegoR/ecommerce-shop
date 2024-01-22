export async function getAllGroupProducts({group, pageParam} ) {
  const url = `http://localhost:1234/products/byGroup?group=${group}&page=${pageParam}`;
  const response = await fetch(url);
  const data =  await response.json();
  const nextCursor = Number(data.page) + 1;
  return { products: data.resultProducts, nextCursor: nextCursor }
}
export default getAllGroupProducts;
