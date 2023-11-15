// Función para obtener N elementos aleatorios de un array
export function getRandomProducts(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }