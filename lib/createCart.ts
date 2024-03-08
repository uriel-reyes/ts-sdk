// const createCart = () => {
//     return apiRoot
//     .carts()
//     .post({
//       //The cart draft is the object within the body
//       body:{
//         currency: "USD",
//         customLineItems:[
//         {
//             "name":{
//               "en": "Custom"
//             },
//             "money":{
//               "currencyCode": "USD",
//               "centAmount": 1500
//             },
//             "slug": "customSlug",
//             "taxCategory":{
//               "typeId":"tax-category",
//               "id": "9b32c54d-8c46-40d4-8e2a-766c3eab9113"
//             },
//             "priceMode":"Standard"
//           }
//         ],
//         customerId:"de4afab8-5303-4563-99b8-55c91232ab7e",
//         shippingAddress:{
//           country: "US"
//         }
  
//       }
//     })
//     .execute()
//     .then(response => {
//       // Assuming the response includes a cart object with an id
//       const cartId: string = response.body.id;
//       const version: number = response.body.version;
//       // Now, use this cartId to post line items to the cart
//       // This example assumes you have a method to add line items and that method returns a Promise
//       // return addLineItemsToCart(cartId, version); // You need to define this function and the lineItems variable
//       return createOrder(cartId, version);
//     });
//   }
  
  
//   const createOrder = (cartId: string, version:number) =>{
//     return apiRoot
//     .orders()
//     .post({
//       body: {
//         version,
//         cart:{
//           typeId:"cart",
//           id: cartId
//         }
//       }
//     })
//     .execute()
//   }

// createCart()
//   .then(orderResponse => {
//     // Handle the successful order creation here
//     console.log('Order created successfully:', orderResponse);
//   })