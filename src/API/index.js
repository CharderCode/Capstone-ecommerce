const API_URL = 'https://fakestoreapi.com'

export async function fetchAllProducts() {
  try {
    const response = await fetch(
      `${API_URL}/products`
    );
    const result = await response.json();
    return (result);
  } catch (err) {
    console.error(err);
  }
}

//output for /products
//    [
//     {
//         id:1,
//         title:'...',
//         price:'...',
//         category:'...',
//         description:'...',
//         image:'...'
//     },
//     /*...*/
//     {
//         id:30,
//         title:'...',
//         price:'...',
//         category:'...',
//         description:'...',
//         image:'...'
//     }
// ]

export async function fetchProductById(id) {
  try {
    const response = await fetch(
      `${API_URL}/products/${id}`
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

//output for /products/id
// {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }

export async function fetchProductCategory() {
  try {
    const response = await fetch(
      `${API_URL}/products/categories`
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

//output for /products/categories
// [
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
// ]
