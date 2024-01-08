export async function getFilterProducts( group, price, size, discount ) {
  if(!price && !size && !discount){
    return
  }
 
  try{
    const allSize = size.map(s => {
      let param = `size=${s}`
      return param
    }).join('&')
    const url = `http://localhost:1234/products/byGroup?group=${group}&price=${price}&${allSize}&discount=${discount}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

export default getFilterProducts