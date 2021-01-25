import { useEffect, useState } from "react";


export const useGiphyApi = (limit = 10) => {

   const [ products, setProducts ] = useState([])

   const apiKey = 'q3Yq92YvXHWd7BJ28N7yFz7V5iWCJ9To';

   const url = 'https://api.giphy.com/v1/gifs/trending';

   useEffect(() => {
      fetch(`${url}?api_key=${apiKey}&limit=${limit}`)
      .then((response) => response.json())
      .then( giphs => {
         const {data} = giphs;
         const prueba = data.map( (prod, i) => {
            return {
               id: prod.id,
               title: prod.title,
               url: prod.images?.downsized_medium.url,
               price: i*100,
               brand: `Marca del producto ${i}`,
               description: `Descripción del producto ${i} - Descripción del producto ${i} - Descripción del producto ${i} - Descripción del producto ${i} - Descripción del producto ${i} - Descripción del producto ${i} - Descripción del producto ${i} - Descripción del producto ${i} - Descripción del producto ${i}`
            }
         })
         setProducts(prueba)
      })
   })

   return products;

}
