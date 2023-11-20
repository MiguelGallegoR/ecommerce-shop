//Devuelve todos los productos y todos los grupos por genero introducido
export async function getAllProductsByGender(gender) {
    const url = `http://localhost:1234/products?gender=${gender}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }
  
  export default getAllProductsByGender;