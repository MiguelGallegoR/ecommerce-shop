// Función para obtener N elementos aleatorios de un array
export function getRandomProducts(array, num) {
  const shuffled = array?.sort(() => 0.5 - Math.random());
  return shuffled?.slice(0, num);
}

export function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Return the original value if it's not a non-empty string
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export const formatNumber = (value) => {
  // Elimina cualquier caracter no numérico y limita a tres dígitos
  return /^\d{1,3}$/.test(value) ? value : '';
};
