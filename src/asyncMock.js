const products = [
    {

           "id": "1",
           "name": "playstation 4",
           "price": 499.99,
           "category": "consolas",
           "img": "https://source.unsplash.com/600x400/?playstation 4",
           "stock": 13,
           "description": "Potencia de juego inigualable con gráficos impresionantes y una variedad de títulos emocionantes."
         },
         {
           "id": "2",
           "name": "xbox one",
           "price": 399.99,
           "category": "consolas",
           "img": "https://source.unsplash.com/600x400/?xbox one",
           "stock": 5,
           "description": "Experiencia de juego avanzada con hardware potente y una gran biblioteca de juegos exclusivos."
         },
         {
           "id": "3",
           "name": "iphone 11",
           "price": 199.99,
           "category": "celular",
           "img": "https://source.unsplash.com/600x400/?iphone 11",
           "stock": 55,
           "description": "Innovación y rendimiento excepcionales en un teléfono inteligente líder en el mercado."
         },
         {
           "id": "4",
           "name": "samsung a53",
           "price": 199.99,
           "category": "celular",
           "img": "https://source.unsplash.com/600x400/?samsung galaxy",
           "stock": 48,
           "description": "Equilibrio perfecto entre rendimiento, diseño elegante y una pantalla impresionante."
         },
         {
           "id": "5",
           "name": "xiaomi",
           "price": 149.99,
           "category": "celular",
           "img": "https://source.unsplash.com/600x400/?xiaomi cellphone",
           "stock": 32,
           "description": "Innovación asequible con tecnología avanzada y diseño elegante para una experiencia móvil superior."
         }
]

     

export const getProducts = () => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products)
       }, 1000)
   })
}

export const getProductsByCategory = (categoryId) => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products.filter(prod => prod.category === categoryId))
       }, 1000)
   })
}

export const getProductById = (itemId) => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products.find(prod => prod.id === itemId))
       }, 1000)
   })
}