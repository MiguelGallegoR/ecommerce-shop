export async function getFilterProducts( group, price, size, discount ) {
  try {
    // Si price, size o discount son undefined, se asigna un valor por defecto
    const priceParam = price !== undefined ? `price=${price}` : '';
    
    const sizeParam = size
      ? size
          .map((s) => `size=${s}`)
          .join('&')
      : '';

    const discountParam = discount !== undefined ? `discount=${discount}` : '';

    // Se construye la URL con los parámetros
    const url = `http://localhost:1234/products/byGroup?group=${group}&${priceParam}&${sizeParam}&${discountParam}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Puedes relanzar el error para que sea manejado en el lugar que llame a esta función
  }
}

export default getFilterProducts