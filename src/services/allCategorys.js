export async function getAllCategorys() {
    const url = "http://localhost:1234/products/categorys";
    const response = await fetch(url);
    const data = response.json();
    return data;
}