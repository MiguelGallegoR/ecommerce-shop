export const categories = [
  {
    id: 1,
    name: "Women",
    subcategories: [
      {
        id: 101,
        name: "Clothes",
        groups: [
          {
            id: 1001,
            name: "Dresses",
            products: [
              {
                id: 2001,
                name: "Elegant Red Dress",
                price: 99.99,
                color: "Red",
                size: "M",
                discount: false,
              },
              {
                id: 2002,
                name: "Casual Blue Dress",
                price: 79.99,
                color: "Blue",
                size: "S",
                discount: true,
              },
              // Agrega más productos aquí
            ],
          },
          {
            id: 1002,
            name: "Tops",
            products: [
              {
                id: 2003,
                name: "Striped Blouse",
                price: 49.99,
                color: "White",
                size: "L",
                discount: true,
              },
              {
                id: 2004,
                name: "Floral T-Shirt",
                price: 29.99,
                color: "Pink",
                size: "M",
                discount: false,
              },
              // Agrega más productos aquí
            ],
          },
          // Agrega más grupos y productos de ropa aquí
        ],
      },
      // Agrega más subcategorías y grupos aquí
      {
        id: 102,
        name: "Shoes",
        groups: [
          {
            id: 1003,
            name: "Boots",
            products: [
              {
                id: 2005,
                name: "Leather Boot",
                price: 149.99,
                color: "Black",
                size: "XL",
                discount: true,
              },
              // Agrega más productos aquí
            ],
          },
          {
            id: 1004,
            name: "Sneakers",
            products: [
              {
                id: 2006,
                name: "Canvas Sneaker",
                price: 79.99,
                color: "Blue",
                size: "M",
                discount: false,
              },
              // Agrega más productos aquí
            ],
          },
        ],
      },
      {
        id: 103,
        name: "Accessories",
        groups: [
          {
            id: 1005,
            name: "earrings",
            products: [
              {
                id: 2007,
                name: "Cute Earrings",
                price: 29.99,
                color: "Pink",
                size: "S",
                discount: true,
              },
              // Agrega más productos aquí
            ],
          },
          {
            id: 1006,
            name: "bracelets",
            products: [
              {
                id: 2008,
                name: "Gold Bracelet",
                price: 49.99,
                color: "Gold",
                size: "L",
                discount: false,
              },
              // Agrega más productos aquí
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Men",
    subcategories: [
      {
        id: 201,
        name: "Clothes",
        groups: [
          {
            id: 2001,
            name: "Shirts",
            products: [
              // Productos de camisas para hombres
            ],
          },
          {
            id: 2002,
            name: "Pants",
            products: [
              // Productos de pantalones para hombres
            ],
          },
          // Más grupos y productos de ropa para hombres
          {
            id: 202,
            name: "Shoes",
            groups: [
              {
                id: 2003,
                name: "Boots",
                products: [
                  // Productos de botas para hombres
                ],
              },
              {
                id: 2004,
                name: "Sneakers",
                products: [
                  // Productos de zapatillas para hombres
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Kids",
    subcategories: [
      {
        id: 301,
        name: "Clothes",
        groups: [
          {
            id: 3001,
            name: "T-Shirts",
            products: [
              // Productos de camisas para nin@s
                {
                  id: 3001,
                  name: "Cute T-Shirt",
                  price: 19.99,
                  color: "Blue",
                  size: "S",
                  discount: false,
                }
            ],
          },
          // más grupos y productos de ropa para nin@s
          {
            id: 302,
            name: "Shoes",
            groups: [
              {
                id: 3003,
                name: "Boots",
                products: [
                  // Productos de botas para nin@s
                  {
                    id: 3002,
                    name: "Leather Boot",
                    price: 99.99,
                    color: "Black",
                    size: "M",
                    discount: true,
                  }
                ],
              },
              {
                id: 3004,
                name: "Sneakers",
                products: [
                  // Productos de zapatillas para nin@s
                  {
                    id: 3003,   
                    name: "Canvas Sneaker",
                    price: 49.99,
                    color: "Blue",
                    size: "L",
                    discount: false,
                  }
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Brands",
    subcategories: [
      {
        id: 401,
        name: "Adidas",
        groups: [
          {
            id: 4001,
            name: "T-Shirts",
            products: [
              // Productos de camisas para Adidas
            ],
          },
          // más grupos y productos de ropa para Adidas
          {
            id: 4002,
            name: "Shoes",
            products: [
                
            ]
          }
        ],
      },
      {
        id: 402,
        name: "Puma",
        groups: [
          {
            id: 4003,
            name: "T-Shirts",
            products: [
              // Productos de camisas para Puma
            ],
          },
          // más grupos y productos de ropa para Puma
          {
            id: 4004,
            name: "Shoes",
            products: [
              // Productos de zapatillas para Puma
            ],
          },
        ],
      }
    ]
  }
];
